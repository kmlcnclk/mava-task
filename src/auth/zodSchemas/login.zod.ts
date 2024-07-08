import { object, string } from 'zod';

export const loginSchema = object({
  Agency: string({
    required_error: 'Agency is required',
  }),
  User: string({
    required_error: 'User is required',
  }),
  Password: string({
    required_error: 'Password is required',
  }),
});
