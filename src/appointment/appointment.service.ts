import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from './appointment';
import { Repository } from 'typeorm';
import { AbstractService } from '../shared/abstract.service';
import { PageOptionsDto, PageDto, PageMetaDto } from '../shared/dtos';

@Injectable()
export class AppointmentService extends AbstractService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
  ) {
    super(appointmentRepository);
  }

  public async getAppointments(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Appointment>> {
    const queryBuilder =
      this.appointmentRepository.createQueryBuilder('appointments');

    queryBuilder
      .leftJoinAndSelect('appointments.user', 'users')
      .leftJoinAndSelect('appointments.comments', 'comments')
      .orderBy('appointments.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }
}
