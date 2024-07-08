import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  Agency: string;

  @ApiProperty()
  User: string;

  @ApiProperty()
  Password: string;
}
