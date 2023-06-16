import { z } from 'zod'

export const LoginFormSchema = z.object ({

  email: z.string().nonempty('Por favor digite o seu email').email('Forneça um email válido'),
  
  password: z.string().nonempty('Por favor digite a sua senha'),
})