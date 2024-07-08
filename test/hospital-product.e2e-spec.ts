import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../src/auth/auth.module';
import { HotelProductModule } from '../src/hotel-product/hotel-product.module';
import { GetArrivalAutocompleteDto } from '../src/hotel-product/dto/getArrivalAutocomplete.dto';
import { GetPriceSearchDto } from '../src/hotel-product/dto/getPriceSearch.dto';

describe('HotelController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        HotelProductModule,
        AuthModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/hotel-product/getarrivalautocomplete (POST)', async () => {
    const getArrivalAutocompleteDto: GetArrivalAutocompleteDto = {
      ProductType: 2,
      Query: 'antal',
      Culture: 'en-US',
    };

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOiIzOTg3MSIsIkRCIjoiVE9VUlZJU0lPIiwiV0lkIjoiMSIsIldtSWQiOiIxIiwiQUciOiJQWE0yNTcxOCIsIkFOYW1lIjoiVmlob2Jvb2siLCJNUiI6IlBBWElNVU0iLCJPRiI6IlBYTTY4NSIsIk9GTmFtZSI6IlZpaG9ib29rIiwiT1AiOiJQQVhJTVVNIiwiVVMiOiJVU1IxIiwiVVNOYW1lIjoiSGF5cmkgWWlsbWF6IiwiQVQiOiIwIiwiV1QiOiIxIiwiU1AiOiIwIiwiUEYiOiIwIiwiUFQiOiIzLDIsMTMsMTQsNCw1LDEiLCJUVCI6IjEiLCJVUm9sZSI6WyI2IiwiNyIsIjgiXSwiVGlkIjoiNjgwMzc2MCIsIm5iZiI6MTcyMDQzNTc5NiwiZXhwIjoxNzIwNDcxNzk2LCJpYXQiOjE3MjA0MzU3OTZ9.ZYHH7L3sgbnUvyLblT0fUw-lSCRyhi6yxpObV-C7DnE';

    const response = await request(app.getHttpServer())
      .post('/hotel-product/getarrivalautocomplete')
      .set('Authorization', `Bearer ${token}`)
      .send(getArrivalAutocompleteDto);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('body');
    expect(response.body.body).toHaveProperty('items');
  });

  it('/hotel-product/pricesearch (POST)', async () => {
    const getPriceSearchDto: GetPriceSearchDto = {
      checkAllotment: true,
      checkStopSale: true,
      getOnlyDiscountedPrice: false,
      getOnlyBestOffers: true,
      productType: 2,
      arrivalLocations: [
        {
          id: '23494',
          type: 2,
        },
      ],
      roomCriteria: [
        {
          adult: 2,
          childAges: [2, 5],
        },
        {
          adult: 1,
          childAges: [3],
        },
      ],
      nationality: 'DE',
      checkIn: '2024-08-20',
      night: 7,
      currency: 'EUR',
      culture: 'en-US',
    };

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOiIzOTg3MSIsIkRCIjoiVE9VUlZJU0lPIiwiV0lkIjoiMSIsIldtSWQiOiIxIiwiQUciOiJQWE0yNTcxOCIsIkFOYW1lIjoiVmlob2Jvb2siLCJNUiI6IlBBWElNVU0iLCJPRiI6IlBYTTY4NSIsIk9GTmFtZSI6IlZpaG9ib29rIiwiT1AiOiJQQVhJTVVNIiwiVVMiOiJVU1IxIiwiVVNOYW1lIjoiSGF5cmkgWWlsbWF6IiwiQVQiOiIwIiwiV1QiOiIxIiwiU1AiOiIwIiwiUEYiOiIwIiwiUFQiOiIzLDIsMTMsMTQsNCw1LDEiLCJUVCI6IjEiLCJVUm9sZSI6WyI2IiwiNyIsIjgiXSwiVGlkIjoiNjgwMzc2MCIsIm5iZiI6MTcyMDQzNTc5NiwiZXhwIjoxNzIwNDcxNzk2LCJpYXQiOjE3MjA0MzU3OTZ9.ZYHH7L3sgbnUvyLblT0fUw-lSCRyhi6yxpObV-C7DnE';

    const response = await request(app.getHttpServer())
      .post('/hotel-product/pricesearch')
      .set('Authorization', `Bearer ${token}`)
      .send(getPriceSearchDto);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('body');
    expect(response.body.body).toHaveProperty('hotels');
  }, 20000);
});
