import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const registerUserForm = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(1, { message: 'Deve conter pelo menos um carácter!' })
    .regex(passwordValidation, { message: 'Senha não é válida!' }),
})

type RegisterUserForm = z.infer<typeof registerUserForm>

export function AddUserSheet() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RegisterUserForm>({
    resolver: zodResolver(registerUserForm),
    mode: 'all',
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
  })

  function handleRegisterUser(data: RegisterUserForm) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleRegisterUser)}>
      <SheetContent className="max-w-[540px] sm:max-w-[700px] p-8 pr-16">
        <SheetHeader className="space-y-8">
          <SheetTitle className="text-2xl">Adicionar usuário</SheetTitle>
          <SheetDescription>
            Para começar, preencha algumas informações básicas sobre quem você
            está adicionando como usuário.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-4 pt-10">
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input className="h-8 rounded-sm" id="name" {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="surname">Sobrenome</Label>
            <Input
              className="h-8 rounded-sm"
              id="surname"
              {...register('surname')}
            />
            {errors.surname && <span>{errors.surname.message}</span>}
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="space-y-1">
            <Label htmlFor="email">E-mail</Label>
            <Input
              className="h-8 rounded-sm"
              type="email"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="space-y-1 flex flex-col p-4">
            <span className="text-muted-foreground text-sm pb-4">
              As senhas devem ter entre 8 e 256 caracteres e usar uma combinação
              de pelo menos três dos seguintes itens: letras maiúsculas, letras
              minúsculas, números e símbolos.
            </span>
            <Label htmlFor="password">Senha</Label>
            <Input
              className="h-8 rounded-sm"
              type="password"
              {...register('password')}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className="grid items-center grid-cols-4 pt-6">
            <Label className="col-span-2">Qual a função deste usuário?</Label>
            <div className="col-span-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a função..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="deliveryman">Entregador</SelectItem>
                  <SelectItem value="recipient">Recipiente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <SheetFooter className="relative lg:top-1/3 sm:top-0">
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </form>
  )
}
