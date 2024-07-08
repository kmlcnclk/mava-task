import { ApiProperty } from '@nestjs/swagger';

export class GetPriceSearchDto {
  @ApiProperty()
  checkAllotment?: boolean;

  @ApiProperty()
  checkStopSale?: boolean;

  @ApiProperty()
  getOnlyDiscountedPrice?: boolean;

  @ApiProperty()
  getOnlyBestOffers?: boolean;

  @ApiProperty()
  productType: number;

  @ApiProperty()
  arrivalLocations: Array<{
    id: string;
    type: number;
  }>;

  @ApiProperty()
  roomCriteria: Array<{
    adult: number;
    childAges: Array<number>;
  }>;

  @ApiProperty()
  nationality?: string;

  @ApiProperty()
  checkIn: string;

  @ApiProperty()
  night: number;

  @ApiProperty()
  currency?: string;

  @ApiProperty()
  culture?: string;
}
