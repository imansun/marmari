import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingController } from './training.controller';
import { TrainingService } from './training.service';
import { TrainingCourse } from './entities/training-course.entity';
import { TrainingSession } from './entities/training-session.entity';
import { TrainingAttendance } from './entities/training-attendance.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TrainingCourse,
      TrainingSession,
      TrainingAttendance,
    ]),
  ],
  controllers: [TrainingController],
  providers: [TrainingService],
  exports: [TrainingService],
})
export class TrainingModule {}
