import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { ZodPipe } from '../pipes/zod.pipe';
import { loginSchema } from './zodSchemas/login.zod';
import { LoginResponse } from './response/login.response';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Login with a user' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully logged in.',
  })
  async login(
    @Body(new ZodPipe(loginSchema)) loginDto: LoginDto,
  ): Promise<LoginResponse> {
    this.logger.log('Requested to Login with a user');

    return this.authService.loginWithThirdPartyApi(loginDto);
  }
}
