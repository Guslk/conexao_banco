# Modelo de Conexão Node.js + Express + MySQL

Este é um projeto boilerplate simples para demonstrar uma conexão funcional entre uma aplicação Node.js/Express e um banco de dados MySQL remoto, usando variáveis de ambiente.

## Objetivo

O foco principal deste repositório é servir como um ponto de partida rápido e claro para projetos que necessitam de uma conexão com banco de dados, mostrando os passos essenciais de forma mínima.

## Pré-requisitos

-   Node.js instalado
-   Um banco de dados MySQL acessível (local ou remoto)

## Como Usar

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Guslk/conexao_banco.git](https://github.com/Guslk/conexao_banco.git)
    ```

2.  **Instale as dependências do backend:**
    ```bash
    cd conexao_banco/backend
    npm install cors dotenv express mysql12
    ```

3.  **Configure as Variáveis de Ambiente:**
    -   Na pasta `backend`, renomeie o arquivo `.env.example` para `.env`.
    -   Abra o arquivo `.env` e preencha com as credenciais do seu banco de dados.

4.  **Crie a Tabela no Banco de Dados:**
    Execute o script SQL que está em `database/schema.sql` no seu banco de dados para criar a tabela `itens` de exemplo.

5.  **Inicie o Servidor Backend:**
    ```bash
    node server.js
    ```
    O terminal deve exibir a mensagem "Servidor de teste rodando na porta 3000".

6.  **Teste a Conexão:**
    -   Abra o arquivo `frontend/index.html` no seu navegador.
    -   A página deverá exibir os dados contidos na sua tabela `itens` em formato JSON.

Isso é tudo! A conexão está funcionando.
