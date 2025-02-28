import z from 'zod';

const signupSchema = z
    .object({
        givenName: z
            .string()
            .min(3)
            .max(40),
        middleName: z
            .string()
            .optional(),
        familyName: z
            .string()
            .min(2)
            .max(80),
        email: z
            .string()
            .min(2)
            .max(200)
            .email(),
        password: z
            .string()
            // .min(8)
            .max(120),
    });

type SignupSchema = z.infer<typeof signupSchema>;

export {
    signupSchema,
    type SignupSchema,
};