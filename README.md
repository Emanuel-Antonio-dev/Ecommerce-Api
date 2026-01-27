# API-Ecommerce

**API-Ecommerce** é o backend oficial de um e-commerce, uma aplicação voltada para vendas de suplementos. Desenvolvida com Node.js, TypeScript e Prisma, esta API fornece os serviços fundamentais para a gestão de usuários, produtos, compras e pagamentos.

## Visão Geral

Esta API oferece:

- Interface RESTful clara e bem estruturada.
- Autenticação e autorização de usuários com JWT e 2FA.
- Integração com banco de dados relacional usando Prisma ORM.
- Validações robustas.
- Arquitetura escalável baseada em camadas (Controllers, Services, Repositories, Interfaces, Common).
- Testes automatizados.
- Observbilidade.
- Limites de requisições.
- Pipelines de CI/CD para facilitar a intrega e implantação contínua.
- Estrutura modular separada por domínios.

## Algumas Tecnologias Utilizadas
------------------------------------------------
| Camada                | Tecnologia           |
|-----------------------|----------------------|
| Linguagem             | TypeScript           |
| Plataforma            | Node.js              |
| Framework             | Express.js           |
| ORM                   | Prisma               |
| Banco de Dados        | PostgreSQL           |
| Autenticação          | JWT + 2FA            |
| Variáveis de Ambiente | dotenv               |
| Conteinerização       | Docker               | 
| Workflows             | Github Actions       | 
| Testes Automatizados  | Jest e Supertest     |
------------------------------------------------


```
E-COMMERCE/
|── .github/
|   ├── workflows
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── __tests__/
│   ├── Common/
│   │   ├── Middlewares/
|          └── Authorization/
|          └── Filters/
|          └── Limiters/
|          └── Observality/
│   │   ├── Utils/
│   │   └── Validators/
│   │   └── Seeds/
│   ├── Controllers/
│   │   └── Users/
│   │       └── Admin/
│   │       └── Client/
│   │   └── Authentication/
│   │   └── Products/
│   │       └── Cart/
│   │       └── Categories/
│   │       └── GeneralProducts/
│   │       └── Products-orders/
│   │       └── ProductsReviews/
│   ├── Interfaces/
│   │       └── Users/
│   │       └── General/
│   │           └── Accounts/
│   │           └── Addresses/
│   │           └── Contacts/
│   │       └── Products/
│   │           └── Cart/
│   │           └── Categories/
│   │           └── GeneralProducts/
│   │           └── Products-orders/
│   │           └── ProductsReviews/
│   │           └── Images/
│   │           └── Reviews/
│   │       └── Shared/
│   ├── Repositories/
│   │   └── Users/
│   │       └── Admin/
│   │       └── Client/
│   │   └── General/
│   │       └── Accounts/
│   │       └── Addresses/
│   │       └── Contacts/
│   │   └── Authentication/
│   │   └── Products/
│   │       └── Cart/
│   │       └── Categories/
│   │       └── GeneralProducts/
│   │       └── Products-orders/
│   │       └── ProductsReviews/
│   ├── Services/
│   │   └── Users/
│   │       └── Admin/
│   │       └── Client/
│   │   └── General/
│   │       └── Accounts/
│   │       └── Addresses/
│   │       └── Contacts/
│   │   └── Authentication/
│   │   └── Products/
│   │       └── Cart/
│   │       └── Categories/
│   │       └── GeneralProducts/
│   │       └── Products-orders/
│   │       └── ProductsReviews/
│   └── app.ts
│   └── server.ts
├── .env.example
├── .env.test
├── DockerFile
├── docker-compose
├── jest.config.ts
├── jest.setup.config.ts
├── package.json
├── tsconfig.json
├── API-collection-routes.yaml
└── README.md
```

## Instalação e Execução

### 1. Clonar o Repositório

```bash
git clone https://github.com/emaricarProgrammer/API-Ecommerce.git
cd API-Ecommerce
```

### 2. Instalar Dependências

```bash
pnpm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` com as seguintes variáveis:

```env
PORT=3000
DATABASE_URL="postgresql://usuario:senha@localhost:5432/example"
JWT_SECRET="###############"
```

### 4. Executar Migrações

```bash
npx prisma migrate dev
```

### 5. Iniciar a Aplicação

```bash
pnpm start:dev
```

A aplicação será executada em `http://localhost:3000/api.ecommerce/v1`.

## Scripts
---------------------------------------------------------------
|       Comando           |         Descrição                 |
|-------------------------|-----------------------------------|
|   `pnpm start:dev`      |    Inicia o servidor em modo dev  |
|   `pnpm test`           |    Rodar os testes automatizados  |
|   `pnpm build`          |    Compila os arquivos TypeScript |
|   `npx prisma`          |    Executa comandos do Prisma ORM |
---------------------------------------------------------------

## Boas Práticas Adotadas

- Arquitetura por domínio (User, Account, Contact).
- Separação entre camadas: Controllers, Interfaces, Services e Repositories.
- Validação de dados centralizada.
- Uso de interfaces e tipos com TypeScript.
- Padronização de mensagens e respostas da API.

## Contribuidores

| Nome            | Função                |
|-----------------|-----------------------|
| Emanuel António | Desenvolvedor Backend |

## Próximas Funcionalidades

- Módulo de entregas

## Licença

Este projeto está licenciado sob os termos da Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

## Sobre o Projeto

Esta API é uma iniciativa criada com o objetivo de automatizar as vendas de suplementos por meio da tecnologia. Esta API representa o motor principal que alimenta a experiência do usuário na plataforma, garantindo segurança, eficiência e escalabilidade.