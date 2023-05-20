import { IsEnum, IsNotEmpty } from 'class-validator';
import { AppointmentStatus } from '../appointment';

export class UpdateAppointmentDto {
  @IsNotEmpty()
  @IsEnum(AppointmentStatus)
  status: AppointmentStatus;
}
