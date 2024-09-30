# 🛒 Loja de Informática

Este projeto é uma simples página desenvolvida para a disciplina de **Programação para Web 2**. A aplicação permite o cadastro e a exibição de produtos em uma loja de informática, utilizando **React** para a construção da interface e **Tailwind CSS** para a estilização.

## 🧩 Funcionalidades

- **📋 Cadastro de Produtos:** Um formulário simples permite a inserção de novos produtos na lista.
- **📝 Exibição de Produtos:** Os produtos cadastrados são exibidos logo abaixo do formulário em uma lista organizada.

## 📋 Requisitos

Antes de executar o projeto, certifique-se de que você tenha os seguintes requisitos instalados em seu ambiente:

- [Node.js](https://nodejs.org/pt)

## 🚀 Tecnologias Utilizadas

- [**⚛️ React:**](https://react.dev/) Biblioteca JavaScript para construção da interface do usuário.
- [**🎨 Tailwind CSS:**](https://tailwindcss.com/) Framework utilitário para estilização rápida e customizável.
- [**⚠️ SweetAlert:**](https://sweetalert2.github.io/) Biblioteca para exibir alertas customizáveis.
- [**🌐 JSON-Server:**](https://www.npmjs.com/package/json-server) Ferramenta para simular uma API REST em um ambiente local.

## 🛠️ Como Executar o Projeto

1. Clone o repositório:

   ```cmd
   > git clone git@github.com:gusmaomatheus/computer-store.git
   > cd computer-store
   ```

2. Instale as dependências:

   ```cmd
   > npm install
   ```

3. Inicie o JSON-Server:

   ```cmd
   > npx json-server --watch db.json --port 3333
   ```

4. Inicie o servidor de desenvolvimento do React:

   ```cmd
   > npm run start
   ```

5. Acesse a aplicação em: [http://localhost:3000](http://localhost:3000)

## ✨ Considerações Finais

Este projeto foi desenvolvido como parte de uma atividade avaliativa, com foco em praticar a construção de páginas utilizando React e Tailwind, além de simular a interação com uma API REST usando JSON-Server.
