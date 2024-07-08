import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '../guards/auth.guard';
import { HotelProductService } from './hotel-product.service';
import { ZodPipe } from '../pipes/zod.pipe';
import { getArrivalAutocompleteSchema } from './zodSchemas/getArrivalAutocomplete.zod';
import { GetArrivalAutocompleteDto } from './dto/getArrivalAutocomplete.dto';
import { GetPriceSearchDto } from './dto/getPriceSearch.dto';
import { getPriceSearchSchema } from './zodSchemas/getPriceSearch.zod';
import { GetArrivalAutoCompleteResponse } from './response/getArrivalAutocomplete.response';
import { GetPriceSearchResponse } from './response/getPriceSearch.response';

@ApiTags('Hotel Product')
@ApiBearerAuth('access-token')
@Controller('hotel-product')
export class HotelProductController {
  private readonly logger = new Logger(HotelProductController.name);

  constructor(private readonly hotelProductService: HotelProductService) {}

  @Post('getarrivalautocomplete')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      'Get Arrival Autocomplete. Note: You need to provide the token in the header.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Getting arrival autocomplete from third party api.',
  })
  async getArrivalAutocompleteFromThirdPartyApi(
    @Body(new ZodPipe(getArrivalAutocompleteSchema))
    getArrivalAutocompleteDto: GetArrivalAutocompleteDto,
    @Req() req: Request,
  ): Promise<GetArrivalAutoCompleteResponse> {
    const token = req.headers['authorization'];

    this.logger.log('Requested to Get Arrival Autocomplete');

    return this.hotelProductService.getArrivalAutocompleteFromThirdPartyApi(
      getArrivalAutocompleteDto,
      token,
    );
  }

  @Post('pricesearch')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      'Make price search. Note: You need to provide the token in the header.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Making price search from third party api.',
  })
  async getPriceSearchFromThirdPartyApi(
    @Body(new ZodPipe(getPriceSearchSchema))
    getPriceSearchDto: GetPriceSearchDto,
    @Req() req: Request,
  ): Promise<GetPriceSearchResponse> {
    this.logger.log('Requested to Get Price Search');

    const token = req.headers['authorization'];

    return this.hotelProductService.getPriceSearchFromThirdPartyApi(
      getPriceSearchDto,
      token,
    );
  }
}
