Agenda Backend (MongoDB)

Este é o backend do projeto Agenda, desenvolvido em Node.js com MongoDB. Ele fornece uma API REST para gerenciamento de contatos.

- Funcionalidades:

Criação, leitura, atualização e exclusão de contatos.

Conexão com banco de dados MongoDB.

Tratamento de erros e validação de dados.

- Tecnologias:

Node.js

Express.js

Mongoose

- Como executar:

Clone o repositório:

git clone https://github.com/Druwing/agenda-backend-mongodb.git

Instale as dependências:

cd agenda-backend-mongodb
npm install

Crie um arquivo .env com as seguintes variáveis:

MONGODB_URL_LOCAL=SuaURLMongoDB
PORT=3000
JWT_SECRET=suaSenhaAqui

Execute o servidor:

npm start
