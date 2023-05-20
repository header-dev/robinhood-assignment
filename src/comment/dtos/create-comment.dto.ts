import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateUserDto } from '../../user/dtos/create-user.dto';
import { Type } from 'class-transformer';

class NAppointment {
  @IsNotEmpty()
  id: number;
}

class NUser {
  @IsNotEmpty()
  id: number;
}

export class CreateCommentDto {
  @IsNotEmpty()
  message: string;

  @ValidateNested({ each: true })
  @Type()
  appointment: NAppointment;

  @ValidateNested({ each: true })
  @Type(() => NUser)
  user: NUser;
}
