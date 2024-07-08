import { number, object, string } from 'zod';

export const getArrivalAutocompleteSchema = object({
  ProductType: number({
    required_error: 'ProductType is required',
  }),
  Query: string({
    required_error: 'Query is required',
  }),
  Culture: string().optional(),
});
