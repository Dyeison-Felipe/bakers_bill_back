import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class VerifyCodeDto {
  @ApiProperty({ description: 'Login que o usuário vai usar para acessar', example: 'user@example.com' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'CODIGO DE VERIFICAÇÃO', example: '123456' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  code: string;
}
