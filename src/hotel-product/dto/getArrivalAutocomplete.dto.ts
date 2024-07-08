import { ApiProperty } from '@nestjs/swagger';

export class GetArrivalAutocompleteDto {
  @ApiProperty()
  ProductType: number;

  @ApiProperty()
  Query: string;

  @ApiProperty()
  Culture?: string;
}
