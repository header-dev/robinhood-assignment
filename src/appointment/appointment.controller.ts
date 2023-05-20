import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { UpdateAppointmentDto } from './dtos/update-appointment.dto';
import { Appointment } from './appointment';
import { PageOptionsDto, PageDto } from 'src/shared/dtos';

@Controller('appointment')
@UseInterceptors(ClassSerializerInterceptor)
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Appointment>> {
    return this.appointmentService.getAppointments(pageOptionsDto);
  }

  @Get('/:id')
  async getAppointmentById(@Param('id') id: string) {
    const appoint = await this.appointmentService.findOne({
      where: {
        id: id,
      },
      relations: ['comments', 'user', 'comments.user'],
    });

    if (!appoint) throw new NotFoundException();

    return appoint;
  }

  @Post()
  async create(@Body() body: CreateAppointmentDto) {
    return this.appointmentService.save(body);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() body: UpdateAppointmentDto) {
    const appointment: Appointment = await this.appointmentService.findOne({
      where: { id },
    });
    if (!appointment) throw new NotFoundException();
    await this.appointmentService.update(id, body);

    return appointment;
  }
}
