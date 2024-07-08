import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GetArrivalAutocompleteDto } from './dto/getArrivalAutocomplete.dto';
import { ConfigService } from '@nestjs/config';
import { GetPriceSearchDto } from './dto/getPriceSearch.dto';
import { GetArrivalAutoCompleteResponse } from './response/getArrivalAutocomplete.response';
import { GetPriceSearchResponse } from './response/getPriceSearch.response';

@Injectable()
export class HotelProductService {
  private readonly logger = new Logger(HotelProductService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getArrivalAutocompleteFromThirdPartyApi(
    getArrivalAutocompleteDto: GetArrivalAutocompleteDto,
    token: string,
  ): Promise<GetArrivalAutoCompleteResponse> {
    this.logger.log('Request to Get Arrival Autocomplete from third party api');

    const URL = await this.configService.get<string>('THIRD_PARTY_API_URL');

    const getArrivalAutocompletePayload = {
      ProductType: getArrivalAutocompleteDto.ProductType,
      Query: getArrivalAutocompleteDto.Query,
      Culture: getArrivalAutocompleteDto.Culture,
    };

    const data = await this.httpService.axiosRef
      .post(
        `${URL}/api/productservice/getarrivalautocomplete`,
        getArrivalAutocompletePayload,
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((res) => res.data)
      .catch((err: any) => {
        this.logger.error(
          'Error while getting arrival autocomplete from third party api',
        );

        throw new Error(
          'Error while getting arrival autocomplete from third party api',
        );
      });

    this.logger.log('Get Arrival Autocomplete from third party api success');
    return data;
  }

  async getPriceSearchFromThirdPartyApi(
    getPriceSearchDto: GetPriceSearchDto,
    token: string,
  ): Promise<GetPriceSearchResponse> {
    this.logger.log('Request to Get Price Search from third party api');

    const URL = await this.configService.get<string>('THIRD_PARTY_API_URL');

    const getPriceSearchPayload = {
      checkAllotment: getPriceSearchDto.checkAllotment || null,
      checkStopSale: getPriceSearchDto.checkStopSale || null,
      getOnlyDiscountedPrice: getPriceSearchDto.getOnlyDiscountedPrice || null,
      getOnlyBestOffers: getPriceSearchDto.getOnlyBestOffers || null,
      productType: getPriceSearchDto.productType,
      arrivalLocations: getPriceSearchDto.arrivalLocations,
      roomCriteria: getPriceSearchDto.roomCriteria,
      nationality: getPriceSearchDto.nationality || null,
      checkIn: getPriceSearchDto.checkIn,
      night: getPriceSearchDto.night,
      currency: getPriceSearchDto.currency || null,
      culture: getPriceSearchDto.culture || null,
    };

    const data = await this.httpService.axiosRef
      .post(`${URL}/api/productservice/pricesearch`, getPriceSearchPayload, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => res.data)
      .catch((err: any) => {
        this.logger.error(
          'Error while getting price search from third party api',
        );

        throw new Error(
          'Error while getting price search from third party api',
        );
      });

    this.logger.log('Get Price Search from third party api success');
    return data;
  }
}
