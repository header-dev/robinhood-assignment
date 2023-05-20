import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { AppointmentController } from './appointment/appointment.controller';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        host: config.get('DATABASE_HOST'),
        port: parseInt(config.get('DATABASE_PORT'), 10) || 5432,
        type: 'mysql',
        database: config.get('DATABASE_NAME'),
        username: config.get('DATABASE_USER'),
        password: config.get('DATABASE_PASSWORD'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    CacheModule.register(),
    CommentModule,
    UserModule,
    AppointmentModule,
  ],
  controllers: [UserController, AppointmentController, CommentController],
})
export class AppModule {}
