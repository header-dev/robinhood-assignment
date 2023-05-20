import { IsEnum } from 'class-validator';
import { AppointmentStatus } from '../appointment';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/user';
import { Comment } from '../../comment/comment';

export class GetAppointmentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  @IsEnum(AppointmentStatus)
  status: AppointmentStatus;

  @ApiProperty()
  user: User;

  @ApiProperty()
  comments: Comment[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
