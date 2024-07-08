import { Test, TestingModule } from '@nestjs/testing';
import { HotelProductController } from '../hotel-product.controller';
import { HttpModule } from '@nestjs/axios';
import { HotelProductService } from '../hotel-product.service';
import { AuthGuard } from '../../guards/auth.guard';
import { ConfigModule } from '@nestjs/config';
import { GetArrivalAutocompleteDto } from '../dto/getArrivalAutocomplete.dto';
import { GetPriceSearchDto } from '../dto/getPriceSearch.dto';

describe('HotelProductController', () => {
  let controller: HotelProductController;

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
      providers: [HotelProductService, AuthGuard],
      controllers: [HotelProductController],
    }).compile();

    controller = module.get<HotelProductController>(HotelProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return Getting arrival autocomplete from third party api', async () => {
    const getArrivalAutocompleteDto: GetArrivalAutocompleteDto = {
      ProductType: 2,
      Query: 'antal',
      Culture: 'en-US',
    };

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOiIzOTg3MSIsIkRCIjoiVE9VUlZJU0lPIiwiV0lkIjoiMSIsIldtSWQiOiIxIiwiQUciOiJQWE0yNTcxOCIsIkFOYW1lIjoiVmlob2Jvb2siLCJNUiI6IlBBWElNVU0iLCJPRiI6IlBYTTY4NSIsIk9GTmFtZSI6IlZpaG9ib29rIiwiT1AiOiJQQVhJTVVNIiwiVVMiOiJVU1IxIiwiVVNOYW1lIjoiSGF5cmkgWWlsbWF6IiwiQVQiOiIwIiwiV1QiOiIxIiwiU1AiOiIwIiwiUEYiOiIwIiwiUFQiOiIzLDIsMTMsMTQsNCw1LDEiLCJUVCI6IjEiLCJVUm9sZSI6WyI2IiwiNyIsIjgiXSwiVGlkIjoiNjgwMzc2MCIsIm5iZiI6MTcyMDQzNTc5NiwiZXhwIjoxNzIwNDcxNzk2LCJpYXQiOjE3MjA0MzU3OTZ9.ZYHH7L3sgbnUvyLblT0fUw-lSCRyhi6yxpObV-C7DnE';

    const result = await controller.getArrivalAutocompleteFromThirdPartyApi(
      getArrivalAutocompleteDto,
      { headers: { authorization: `Bearer ${token}` } } as unknown as Request,
    );

    expect(result).toHaveProperty('body');
    expect(result?.body).toHaveProperty('items');
  });

  it('should return Searching price from third party api', async () => {
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

    const result = await controller.getPriceSearchFromThirdPartyApi(
      getPriceSearchDto,
      { headers: { authorization: `Bearer ${token}` } } as unknown as Request,
    );

    expect(result).toHaveProperty('body');
    expect(result?.body).toHaveProperty('hotels');
  }, 20000);
});
