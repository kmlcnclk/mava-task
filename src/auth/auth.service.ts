import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { LoginResponse } from './response/login.response';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async loginWithThirdPartyApi(loginDto: LoginDto): Promise<LoginResponse> {
    this.logger.log('Request to login with third party api');

    const URL = await this.configService.get<string>('THIRD_PARTY_API_URL');

    const loginPayload = {
      Agency: loginDto.Agency,
      User: loginDto.User,
      Password: loginDto.Password,
    };

    const data = await this.httpService.axiosRef
      .post(`${URL}/api/authenticationservice/login`, loginPayload)
      .then((res) => res.data)
      .catch((err: any) => {
        this.logger.error('Error while login with third party api');

        throw new Error('Error while login with third party api');
      });

    this.logger.log('Login with third party api success');

    return data;
  }
}
