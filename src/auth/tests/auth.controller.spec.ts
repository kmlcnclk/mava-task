import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../auth.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.register({
          maxRedirects: 5,
        }),
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
      providers: [AuthService],
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return access token on login', async () => {
    const loginDto: LoginDto = {
      Agency: 'PXM25718',
      User: 'USR1',
      Password: 'Admin01.',
    };

    const result = await controller.login(loginDto);

    expect(result).toHaveProperty('body');
    expect(result?.body).toHaveProperty('token');
  });
});
