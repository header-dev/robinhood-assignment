import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './appointment';
import { SharedModule } from '../shared/shared.module';
import { AppointmentController } from './appointment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment]), SharedModule],
  controllers: [AppointmentController],
  providers: [AppointmentService],
  exports: [AppointmentService],
})
export class AppointmentModule {}
