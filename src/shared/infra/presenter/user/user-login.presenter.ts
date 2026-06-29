import { ApiProperty } from '@nestjs/swagger';
import { PermissionPresenter } from '../permission/permission.presenter';
import { CompanyPresenter } from '../company/company-presenter';

export class UserLoginPresenter {
  @ApiProperty({
    description: 'Identificação do usuário que realizou a autenticação',
  })
  readonly id: string;

  @ApiProperty({
    description: 'Cargo do usuário que realizou a autenticação',
  })
  readonly role: string;

  @ApiProperty({
    description: 'Username do usuário',
  })
  readonly username: string;

  @ApiProperty({
    description: 'Username do usuário',
  })
  readonly email: string;

  @ApiProperty({
    description: 'Permissões do usuário que realizou a autenticação',
  })
  readonly permissions?: PermissionPresenter[] | null;
}
