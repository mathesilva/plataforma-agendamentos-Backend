# 📅 Plataforma de Agendamentos - Backend

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

> Backend para gerenciamento de agendamentos com autenticação JWT, desenvolvido com Node.js, Express, TypeScript e MongoDB.

---

## 📌 Sobre o Projeto

Este é o backend de uma **plataforma de agendamentos** que permite:
- Registro de usuários
- Login com autenticação JWT
- Validação de sessão
- Integração com banco de dados MongoDB

---

## 🚀 Tecnologias Utilizadas
- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB (Mongoose)**
- **JWT (JSON Web Token)**
- **Zod** (validação de dados)
- **Dotenv** (variáveis de ambiente)
- **Bcrypt** (hash de senhas)

---

## 📂 Estrutura do Projeto
src/
├── controllers/ # Controladores de rotas
├── routes/ # Definição de rotas
├── schemas/ # Validação com Zod
├── models/ # Modelos do MongoDB
├── middlewares/ # Middlewares de autenticação
├── config/ # Configurações (ex: conexão MongoDB)
└── server.ts # Arquivo inicial


---

## ⚙️ Como Executar

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/mathesilva
cd repositorio

npm install // para Instalar dependências

## Crie um arquivo .env na raiz do projeto com:
PORT=3000
MONGODB_URI=sua_string_de_conexao_mongodb
JWT_SECRET=sua_chave_secreta

## Rodar o servidor
npm run dev

O servidor iniciará em: http://localhost:3000

---

📬 Endpoints

POST /auth/register
{
  "name": "João",
  "email": "joao@email.com",
  "password": "123456"
}

POST /auth/login
{
  "email": "joao@email.com",
  "password": "123456"
}

Perfil (requer token)

GET /auth/profile

// Enviar Authorization: Bearer {token} no header.

---

📅 Scheduling Platform - Backend

Backend for a scheduling management system with JWT authentication, built with Node.js, Express, TypeScript, and MongoDB.

---

## 🚀 Technologies
- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB (Mongoose)**
- **JWT (JSON Web Token)**
- **Zod** 
- **Dotenv** 
- **Bcrypt** 

---

📂 Project Structure
src/
  ├── controllers/       # Route controllers
  ├── routes/            # Route definitions
  ├── schemas/           # Zod validation
  ├── models/            # MongoDB models
  ├── middlewares/       # Authentication middlewares
  ├── config/            # Configurations (e.g., MongoDB connection)
  └── server.ts          # Entry point

---

⚙️ How to Run
** Clone the repository
git clone https://github.com/mathesilva
cd repository

** Install dependencies
npm install


**Create a .env file in the project root:**

PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

**Start the server**

npm run dev
The server will run at: http://localhost:3000

---

📬 Endpoints

**Register**
POST /auth/register
{
  "name": "John",
  "email": "john@email.com",
  "password": "123456"
}

**Login**
POST /auth/login
{
  "email": "john@email.com",
  "password": "123456"
}

**Profile (requires token)**
GET /auth/profile
Send Authorization: Bearer {token} in the header.

---

📄 License

This project is licensed under the MIT License.