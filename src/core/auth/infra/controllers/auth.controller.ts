import { Body, Controller, HttpCode, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import type { FastifyReply } from 'fastify';
import { LoginDto } from '../dtos/login.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginUseCase } from '../../application/usecase/login.usecase';
import { LoginPresenter } from '@/shared/infra/presenter/login/login.presenter';
import { Public } from '@/shared/infra/decorators/permission.decorator';
import { ForgotPasswordUseCase } from '../../application/usecase/forgot-password.usecase';
import { ForgotPasswordDto } from '../dtos/forgot-password.dto';
import { VerifyCodeDto } from '../dtos/verify-code.dto';
import { VerifyCodeUseCase } from '../../application/usecase/verify-code.usecase';
import { repl } from '@nestjs/core';

@ApiTags('Auth')
@Controller('/v1/auth')
export class AuthController {
  constructor(
    private readonly loginUseCase: LoginUseCase,
    private readonly forgotPasswordUseCase: ForgotPasswordUseCase,
    private readonly verifyCodeUseCase: VerifyCodeUseCase,
  ) { }

  @Post('/login')
  @Public()
  @ApiOperation({ summary: 'Login' })
  @ApiBody({ type: LoginDto })
  @ApiCreatedResponse({
    description: 'Login realizado com sucesso',
    type: LoginPresenter,
  })
  @ApiUnauthorizedResponse({ description: 'Credenciais inválidas' })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno do servidor',
  })
  async login(
    @Res({ passthrough: true }) reply: FastifyReply,
    @Body() loginRequestDto: LoginDto,
  ): Promise<LoginPresenter> {
    return await this.loginUseCase.execute({
      ...loginRequestDto,
      setCookie: reply.setCookie.bind(reply),
    });
  }

  @HttpCode(HttpStatus.OK)
  @Post('forgot-password')
  @Public()
  async forgotPassword(@Body() dto: ForgotPasswordDto): Promise<void> {
    await this.forgotPasswordUseCase.execute(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('verify-code')
  async verifyCode(@Res({ passthrough: true }) reply: FastifyReply, @Body() dto: VerifyCodeDto): Promise<void> {
    await this.verifyCodeUseCase.execute({
      ...dto,
      setCookie: reply.setCookie.bind(reply)
    })
  }
}
