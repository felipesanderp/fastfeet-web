import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

export function AddUserSheet() {
  return (
    <SheetContent className="max-w-[600px] sm:max-w-[540px]">
      <SheetHeader>
        <SheetTitle>Adicionar usuário</SheetTitle>
        <SheetDescription>
          Para começar, preencha algumas informações básicas sobre quem você
          está adicionando como usuário.
        </SheetDescription>
      </SheetHeader>
      <div className="flex items-center gap-4 py-4">
        <div className="space-y-1">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="surname">Sobrenome</Label>
          <Input id="surname" />
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input name="email" type="email" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input name="password" type="password" />
        </div>
      </div>
    </SheetContent>
  )
}
