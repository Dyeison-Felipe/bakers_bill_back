import { ApiProperty } from '@nestjs/swagger';
import { UserLoginPresenter } from '../user/user-login.presenter';
import { CompanyLoginPresenter } from '../company/company-login.presenter';

export class LoginPresenter {
  @ApiProperty({
    description: 'Usuário do login',
  })
  readonly user: UserLoginPresenter;

  @ApiProperty({
    description: 'Token da autenticação',
  })
  readonly token: string;

  @ApiProperty({
    description: 'Empresa pertencente ao usuário',
  })
  readonly company: CompanyLoginPresenter;
}
