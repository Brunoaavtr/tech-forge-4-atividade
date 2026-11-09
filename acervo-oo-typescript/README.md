# Sistema de Gerenciamento de Acervo

Aplicação simplificada de console desenvolvida em TypeScript para demonstrar os conceitos de Orientação a Objetos.

## Requisitos

- Node.js (versão 18 ou superior)
- npm

## Instalação

```bash
npm install
```

## Executar durante o desenvolvimento

```bash
npm run dev
```

## Compilar e executar a versão JavaScript

```bash
npm run build
npm start
```

A compilação lê os arquivos de `src/` e gera JavaScript em `dist/`.

## Conceitos demonstrados

1. **Configuração:** estrutura `src/` e `dist/`, `tsconfig.json` com `strict: true`, execução com `ts-node` e compilação com `tsc`.
2. **Classes e construtores:** `ItemAcervo`, `Livro` e `JogoEletronico`; uso de parameter properties e coleção de objetos.
3. **Encapsulamento:** atributos privados, métodos `emprestar()` e `devolver()` com validações e identificador `readonly`.
4. **Getters e static:** `statusDisponibilidade` calculado sem duplicar estado e contador estático privado para IDs.
5. **Herança e abstração:** classe abstrata `ItemAcervo`, método abstrato `calcularMulta()` e implementações com `override`.
6. **Interface:** `Reservavel`, implementada pela classe `Livro`.
7. **Generics e exceções:** `RepositorioMemoria<T>` com constraint, além de `try/catch` e validações que lançam `Error`.

## Regras de multa

- Livro: R$ 1,50 por dia de atraso.
- Jogo eletrônico: R$ 3,00 por dia de atraso.

Os valores são exemplos didáticos e podem ser alterados conforme a orientação do professor.

## Estrutura

```text
acervo-oo-typescript/
├── src/
│   ├── Acervo.ts
│   ├── ItemAcervo.ts
│   ├── JogoEletronico.ts
│   ├── Livro.ts
│   ├── Reservavel.ts
│   ├── RepositorioMemoria.ts
│   └── index.ts
├── dist/
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## Publicar no GitHub

1. Crie um repositório novo no GitHub (por exemplo, `acervo-oo-typescript`).
2. Extraia este projeto e abra a pasta no VS Code.
3. No terminal, execute:

```bash
git init
git add .
git commit -m "Projeto de acervo em TypeScript com POO"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/acervo-oo-typescript.git
git push -u origin main
```

4. Entregue o endereço do repositório, no formato `https://github.com/SEU-USUARIO/acervo-oo-typescript`.

Substitua `SEU-USUARIO` pelo seu usuário do GitHub.
