import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ForgotPasswordDto {
  @ApiProperty({ description: 'Login que o usuário vai usar para acessar', example: 'user@example.com' })
  @IsString()
  @IsNotEmpty()
  email: string;
}
