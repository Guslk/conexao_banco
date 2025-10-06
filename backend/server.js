// server.js - Modelo de Conexão com Banco de Dados

// 1. Importar as dependências
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// 2. Configurar o servidor Express
const app = express();
const PORT = 3000;
app.use(cors()); // Habilita o CORS para permitir a comunicação com o frontend
app.use(express.json()); // Habilita o servidor a ler JSON

// 3. Configurar a conexão com o banco de dados usando variáveis de ambiente
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

// Criação do pool de conexões. O pool é mais eficiente que conexões individuais.
const pool = mysql.createPool(dbConfig);

// 4. Rota de Teste para buscar dados (Endpoint)
// Esta é a única rota necessária para provar que a conexão funciona.
app.get('/api/data', async (req, res) => {
    try {
        // Testa a conexão e executa uma query simples
        const [rows] = await pool.query('SELECT * FROM itens');
        res.status(200).json(rows); // Retorna os dados como JSON com status 200 (OK)
    } catch (error) {
        // Se der erro, informa no console e envia uma resposta de erro
        console.error('Erro ao buscar dados do banco:', error);
        res.status(500).json({ message: 'Erro ao conectar com o banco de dados.' });
    }
});

// 5. Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor de teste rodando na porta ${PORT}`);
    console.log('Acesse http://localhost:3000/api/data para testar a rota.');
});