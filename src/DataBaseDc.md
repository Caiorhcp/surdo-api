# DataBaseDocumentation

## Visão Geral

A camada de banco de dados deste projeto utiliza o **Prisma ORM** para abstração e acesso ao banco de dados. Toda a integração é centralizada no `DatabaseModule`, que provê os serviços e repositórios necessários para as demais camadas da aplicação.

---

## Estrutura dos Arquivos

- `src/infra/database/Database.Module.ts`: Módulo principal de banco de dados.
- `src/infra/database/prisma/prisma.service.ts`: Serviço que instancia o Prisma Client.
- `src/infra/database/prisma/repositories/PrismaUserRepository.ts`: Implementação do repositório de usuários usando Prisma.
- `src/modules/user/repositories/UserRepository.ts`: Contrato (abstract class/interface) para repositórios de usuário.

---

## DatabaseModule

```typescript
// filepath: src/infra/database/Database.Module.ts

import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserRepository";
import { UserRepository } from "src/modules/user/repositories/UserRepository";

/**
 * Módulo responsável por prover os serviços e repositórios de banco de dados.
 * Permite trocar facilmente a implementação do repositório de usuário.
 */
@Module({
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository // Troque aqui para mudar a implementação do banco
        }
    ],
    exports: [UserRepository],
})
export class DatabaseModule {}
```

### O que faz:
- Registra o `PrismaService` (instância do Prisma Client).
- Injeta o repositório de usuários (`UserRepository`) usando a implementação `PrismaUserRepository`.
- Permite trocar facilmente a implementação do repositório (por exemplo, para testes ou outro banco) alterando apenas o `useClass`.

---

## PrismaService

- Responsável por criar e gerenciar a instância do Prisma Client.
- Permite que outros providers usem o Prisma para acessar o banco de dados.

---

## PrismaUserRepository

- Implementa o contrato `UserRepository` usando Prisma.
- Realiza operações como criar, buscar, atualizar e deletar usuários no banco.
- Utiliza mappers para converter entre entidades de domínio e modelos do Prisma.

---

## UserRepository (Contrato)

- Define os métodos que qualquer repositório de usuário deve implementar.
- Permite trocar a implementação sem alterar o restante da aplicação.

---

## Como trocar a implementação do banco

Para usar outro banco ou mockar o repositório em testes, basta criar uma nova classe que implemente `UserRepository` e alterar o `useClass` no `DatabaseModule`:

```typescript
{
    provide: UserRepository,
    useClass: OutraImplementacaoDeUserRepository
}
```

---

## Boas práticas

- **Nunca acesse o Prisma Client diretamente fora dos repositórios.**
- **Sempre injete os repositórios via providers.**
- **Use contratos (interfaces/abstract classes) para facilitar a troca de implementação.**
- **Utilize mappers para conversão entre entidades de domínio e modelos do banco.**

---

## Exemplo de fluxo de criação de usuário

1. Controller recebe a requisição e chama o use case.
2. Use case instancia a entidade `User` e chama o método `create` do repositório.
3. O repositório usa o mapper para converter a entidade para o formato do Prisma e salva no banco.
4. O repositório retorna a entidade criada com o `id` gerado pelo banco.
5. O use case retorna a entidade para o controller, que monta a resposta HTTP.

---

## Observações

- Para adicionar novos repositórios, siga o mesmo padrão: crie o contrato, a implementação Prisma e registre no `DatabaseModule`.
- Para rodar as migrations do Prisma, utilize `npx prisma migrate dev`.
- Para gerar o Prisma Client, utilize `npx prisma generate`.

---