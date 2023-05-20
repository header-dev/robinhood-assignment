import { Exclude } from 'class-transformer';
import { Appointment } from '../appointment/appointment';
import { Comment } from '../comment/comment';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Appointment, (appointment) => appointment.user, {
    createForeignKeyConstraints: false,
  })
  appointments: Appointment[];

  @OneToMany(() => Comment, (comment) => comment.user, {
    createForeignKeyConstraints: false,
  })
  comments: Comment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
