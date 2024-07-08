import { Module } from '@nestjs/common';
import { HotelProductService } from './hotel-product.service';
import { HotelProductController } from './hotel-product.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthGuard } from '../guards/auth.guard';

@Module({
  imports: [HttpModule],
  providers: [HotelProductService, AuthGuard],
  controllers: [HotelProductController],
})
export class HotelProductModule {}
