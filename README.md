# Electron Template

Template para desenvolvimento de uma aplicação desktop usando Node + React.

## Requisitos

- Node.js (versão 16 ou superior)
- Yarn

## Instalação

```bash
# Instalar dependências do projeto principal
yarn install

# Instalar dependências do renderer (React)
cd renderer && yarn install
```

## Como rodar

### Desenvolvimento
```bash
yarn dev
```
Este comando irá:
- Iniciar o servidor de desenvolvimento do React (Vite)
- Compilar o TypeScript em modo watch
- Abrir o Electron conectado ao servidor local

### Build e execução
```bash
yarn start
```
Este comando irá:
- Fazer build do React para produção
- Compilar o TypeScript
- Executar o Electron com os arquivos buildados

### Comandos individuais

```bash
# Apenas build do React
yarn build:react

# Apenas build do TypeScript
yarn build:main

# Apenas servidor de desenvolvimento do React
yarn dev:react
```

## Estrutura do projeto

```
├── src/                    # Código fonte do Electron
│   ├── main.ts            # Processo principal do Electron
│   └── preload.ts         # Script de preload
├── renderer/              # Interface React/Vite
│   ├── src/               # Código fonte do React
│   └── dist/              # Build do React (gerado)
└── dist/                  # Build do TypeScript (gerado)
```
