import { z } from 'zod';

//request -validation
const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role is required.',
    }),
    password: z.string().optional(),
  }),
});
// await createUserZodSchema.parseAsync(req)

export const userValidation = {
  createUserZodSchema,
};
