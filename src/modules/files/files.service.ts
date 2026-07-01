import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import {
  createWriteStream,
  existsSync,
  mkdirSync,
  unlinkSync,
  readFileSync,
} from 'fs';
import { join } from 'path';
import { v4 as uuid } from 'uuid';
import { CrudService } from '../../core';
import { FileRecord } from './entities/file.entity';

@Injectable()
export class FilesService extends CrudService<FileRecord> {
  constructor(
    @InjectRepository(FileRecord)
    private readonly fileRepository: Repository<FileRecord>,
    private readonly config: ConfigService,
  ) {
    super(fileRepository);
  }

  async upload(
    file: Express.Multer.File,
    entityType?: string,
    entityId?: string,
    isPublic = false,
  ): Promise<FileRecord> {
    const driver = this.config.get<string>('storage.driver', 'local');
    const ext = file.originalname.split('.').pop() || '';
    const fileName = `${uuid()}.${ext}`;

    if (driver === 'local') {
      const uploadDir = this.config.get<string>(
        'storage.local.path',
        './uploads',
      );
      if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
      const filePath = join(uploadDir, fileName);
      createWriteStream(filePath).write(file.buffer);

      const record = this.fileRepository.create({
        originalName: file.originalname,
        fileName,
        mimeType: file.mimetype,
        size: file.size,
        path: filePath,
        storage: 'local',
        entityType,
        entityId,
        isPublic,
      });
      return this.fileRepository.save(record);
    }

    const record = this.fileRepository.create({
      originalName: file.originalname,
      fileName,
      mimeType: file.mimetype,
      size: file.size,
      path: fileName,
      storage: driver,
      bucket: this.config.get<string>('storage.s3.bucket'),
      entityType,
      entityId,
      isPublic,
    });
    return this.fileRepository.save(record);
  }

  async getFile(id: string): Promise<{ record: FileRecord; buffer: Buffer }> {
    const record = await this.findOne(id);
    if (record.storage === 'local') {
      const buffer = readFileSync(record.path);
      return { record, buffer };
    }
    throw new NotFoundException('Remote files not supported yet');
  }

  async deleteFile(id: string): Promise<void> {
    const record = await this.findOne(id);
    if (record.storage === 'local' && existsSync(record.path)) {
      unlinkSync(record.path);
    }
    await this.remove(id);
  }

  async findByEntity(
    entityType: string,
    entityId: string,
  ): Promise<FileRecord[]> {
    return this.fileRepository.find({ where: { entityType, entityId } });
  }
}
