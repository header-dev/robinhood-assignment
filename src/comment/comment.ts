import { Appointment } from '../appointment/appointment';
import { User } from '../user/user';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @ManyToOne(() => User, (user) => user.comments, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({
    name: 'createdBy',
  })
  user: User;

  @ManyToOne(() => Appointment, (appointment) => appointment.comments, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({
    name: 'appointmentId',
  })
  appointment: Appointment;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
