# node-typescript-mongoose
Projeto Back-end API Rest da Sempt Web desenvolvido utilizando NodeJS, TypeScript, Express, Mongoose, integrando com o banco de dados MongoDB.

# semth-server
Projeto Back-end API Rest da Sempt Web desenvolvido utilizando NodeJS, TypeScript, Express, Mongoose, integrando com o banco de dados MongoDB. 

A pasta "src" contém os principais arquivos fontes do projeto. Ela contém o arquivo "server.ts" que é o arquivo principal / inicial responsável por executar o servidor. Dentro da pasta "src" o projeto está estruturado em módulos / pastas, descritos a seguir:

### 1. Módulo "routes"
Contém os arquivos das rotas GET, POST, PUT e DELETE para acesso às funcionalidades da aplicação. As rotas estão organizadas em pastas por domínio para facilitar o entendimento. 

### 2. Módulo “middlewares” 
Possui os arquivos que possuem as funções de verificações / validações.

### 3. Módulo "controllers"  
Contém os arquivos que possuem as funções que realizam requisições (RequestResponse) para os serviços da aplicação e recebem as respostas (Response). 

### 4. Módulo “services” 
Possui os arquivos que contém as funções que realizam as operações de consulta, inserção, atualização e exclusão de dados no banco de dados.

### 5. Módulo "models"  
Contém os arquivos que possuem os modelos / schemas dos documentos que serão armazenados no MongoDB. 

### 6. Módulo “infra” 
Possui os arquivos de configuração do ambiente da aplicação e de conexão com o Banco de Dados. 

### 7. Módulo “helpers” 
Possui os arquivos que contém funções que realizam verificações / validações de valores, como por exemplo, se um CPF é válido.

### 8. Módulo "assets"  
Contém os arquivos estáticos do projeto, como imagens, PDFs, etc. 

## Outros arquivos importantes
- .env.example: arquivo de exemplo que contém as principais configurações da aplicação
- .gitignore: contém a descrição dos arquivos, extensões e pastas que não deverão ser enviadas para o Github
- nodemon.json: configura o "hot reload" (carregamento automático) das alterações realizadas na aplicação quando uma determinada alteração é salva
- package.json: contém as configurações principais do projeto
- tsconfig.json: contém as configurações TypeScrpt do projeto

## Executando o Projeto
1. Instale o NodeJS (versão 16 ou superior) e o NPM.
2. Clone o repositório ou faça o download do resposiório do Projeto
3. Acesse a pasta raiz do projeto (pasta "sempt-server") pelo Prompt de Comando ou Terminal e instale as dependências (pasta "node_modules") digitando o seguinte comando:
```bash
npm i
# ou
npm i --force # se o comando "npm i" der erro
```
4. Execute o projeto digitando o comando seguinte:
```bash
nodemon
# ou
npm run dev
# ou
yarn dev
```
5. Acesse as rotas do servidor pelo navegador ou por um programa específico para acessar rotas de APIs (ex.: Insomnia e Postman) pelo seguinte endereço: [http://localhost:5000](http://localhost:5000).
