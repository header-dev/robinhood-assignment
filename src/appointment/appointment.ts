import { User } from '../user/user';
import { Comment } from '../comment/comment';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AppointmentStatus {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.appointments, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({
    name: 'createdBy',
  })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.appointment, {
    createForeignKeyConstraints: false,
  })
  comments: Comment[];

  @Column({
    type: 'enum',
    enum: AppointmentStatus,
    default: AppointmentStatus.TO_DO,
  })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
