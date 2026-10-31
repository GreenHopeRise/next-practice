import z, { email } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1,'Email is required').email('Enter Valid Email'),
    password: z.string().min(1,'password is requi43e').min(1,'Enter Valid Email')
})
export type LoginFormData = z.infer<typeof loginSchema>