import { Entity, Column, AfterLoad } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

@Entity('files')
export class FileRecord extends BaseEntity {
  @ApiProperty()
  @Column()
  originalName: string;

  @ApiProperty()
  @Column()
  fileName: string;

  @ApiProperty()
  @Column()
  mimeType: string;

  @ApiProperty()
  @Column({ type: 'int' })
  size: number;

  @ApiProperty()
  @Column()
  path: string;

  @ApiProperty()
  @Column({ length: 10, default: 'local' })
  storage: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  bucket: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  url: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  entityType: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  entityId: string;

  @ApiProperty()
  @Column({ default: false })
  isPublic: boolean;

  @AfterLoad()
  generateUrl() {
    if (this.storage === 'local' && !this.url) {
      this.url = `/api/v1/files/${(this as unknown as { id: string }).id}/download`;
    }
  }
}
