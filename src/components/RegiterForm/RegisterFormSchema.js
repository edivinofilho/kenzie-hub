import { z } from 'zod'

export const RegisterFormSchema = z.object ({

  name: z.string().min(3, 'O campo Nome é obrigatório'),
  email: z.string().min(1, 'O campo Email é obrigatório').email('Forneça um email válido'),
  
  password: z.string().min(8, 'A senha precisa conter pelo menos 8 caracteres')
  .regex(/(?= .*?[A-Z])/, 'É necessário pelo menos uma letra maiúscula')
  .regex(/(?= .*?[a-z])/, 'É necessário pelo menos uma letra minúscula')
  .regex(/(?= .*?[0-9])/, 'É necessário pelo menos um número')
  .regex(/(?=.*?[!@#$%^&*(),.?":{}|<>])/, 'É necessário pelo menos um caractere especial'),

})