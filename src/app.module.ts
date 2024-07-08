import { Module } from '@nestjs/common';
import { HotelProductModule } from './hotel-product/hotel-product.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HotelProductModule,
    AuthModule,
  ],
})
export class AppModule {}
