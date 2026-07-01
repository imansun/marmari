import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiConsumes,
} from '@nestjs/swagger';
import type { Response } from 'express';
import { FilesService } from './files.service';
import { FileRecord } from './entities/file.entity';
import { Roles, Public } from '../../common';

@ApiTags('Files')
@ApiBearerAuth()
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @Roles('admin', 'manager')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload a file' })
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body('entityType') entityType?: string,
    @Body('entityId') entityId?: string,
    @Body('isPublic') isPublic?: string,
  ): Promise<FileRecord> {
    return this.filesService.upload(
      file,
      entityType,
      entityId,
      isPublic === 'true',
    );
  }

  @Get(':id/download')
  @Public()
  @ApiOperation({ summary: 'Download a file' })
  async download(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const { record, buffer } = await this.filesService.getFile(id);
    res.set({
      'Content-Type': record.mimeType,
      'Content-Disposition': `attachment; filename="${record.originalName}"`,
      'Content-Length': record.size.toString(),
    });
    res.send(buffer);
  }

  @Get('entity/:entityType/:entityId')
  @ApiOperation({ summary: 'Get files for an entity' })
  findByEntity(
    @Param('entityType') entityType: string,
    @Param('entityId') entityId: string,
  ): Promise<FileRecord[]> {
    return this.filesService.findByEntity(entityType, entityId);
  }

  @Delete(':id')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Delete a file' })
  delete(@Param('id') id: string): Promise<void> {
    return this.filesService.deleteFile(id);
  }
}
