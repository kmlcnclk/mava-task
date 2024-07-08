import { array, boolean, number, object, string } from 'zod';

export const getPriceSearchSchema = object({
  checkAllotment: boolean().optional(),
  checkStopSale: boolean().optional(),
  getOnlyDiscountedPrice: boolean().optional(),
  getOnlyBestOffers: boolean().optional(),
  productType: number({
    required_error: 'productType is required',
  }),
  arrivalLocations: array(
    object({
      id: string({
        required_error: 'id is required',
      }),
      type: number({
        required_error: 'type is required',
      }),
    }),
  ),
  roomCriteria: array(
    object({
      adult: number({
        required_error: 'adult is required',
      }),
      childAges: array(
        number({
          required_error: 'childAges is required',
        }),
      ),
    }),
  ),
  nationality: string().optional(),
  checkIn: string({
    required_error: 'checkIn is required',
  }),
  night: number({
    required_error: 'night is required',
  }),
  currency: string().optional(),
  culture: string().optional(),
});
