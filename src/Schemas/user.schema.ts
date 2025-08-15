import {z} from 'zod';

export const registerSchema = z.object ({
    name: z.string().min(3, 'O nome deve ter no minimo 3 caracteres'),
    email:z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter no minimo 6 caracteres'),
}); 


export type RegisterData = z.infer<typeof registerSchema>;