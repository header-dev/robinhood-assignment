import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';

class NUser {
  @IsNotEmpty()
  id: number;
}

export class CreateAppointmentDto {
  @IsNotEmpty()
  description: string;

  @ValidateNested({ each: true })
  @Type(() => NUser)
  user: NUser;
}
