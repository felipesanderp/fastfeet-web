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

export function AddUserSheet() {
  return (
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
          <Input className="h-8 rounded-sm" id="name" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="surname">Sobrenome</Label>
          <Input className="h-8 rounded-sm" id="surname" />
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input className="h-8 rounded-sm" name="email" type="email" />
        </div>

        <div className="space-y-1 flex flex-col p-4">
          <span className="text-muted-foreground text-sm pb-4">
            As senhas devem ter entre 8 e 256 caracteres e usar uma combinação
            de pelo menos três dos seguintes itens: letras maiúsculas, letras
            minúsculas, números e símbolos.
          </span>
          <Label htmlFor="password">Senha</Label>
          <Input className="h-8 rounded-sm" name="password" type="password" />
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
  )
}
