import z from 'zod';

const overviewSchema = z
    .object({
        name: z
            .string()
            .min(3)
            .max(120),
        logo: z
            .any(),
        description: z
            .string()
            .max(1000),
    });

type OverviewSchema = z.infer<typeof overviewSchema>;

const addressSchema = z
    .object({
        onSite: z
            .boolean(),
        country: z
            .string()
            .optional(),
        region: z
            .string()
            .optional(),
        locality: z
            .string()
            .optional(),
        street: z
            .string()
            .optional(),
        complement: z
            .string()
            .optional(),
        postalCode: z
            .string()
            .optional(),
    });

type AddressSchema = z.infer<typeof addressSchema>;

const newWorkspaceSchema = overviewSchema
    .merge(addressSchema);

type NewWorkspaceSchema = z.infer<typeof newWorkspaceSchema>;

export {
    overviewSchema,
    type OverviewSchema,
    addressSchema,
    type AddressSchema,
    newWorkspaceSchema,
    type NewWorkspaceSchema,
};