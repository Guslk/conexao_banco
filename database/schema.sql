-- Use este comando para criar a tabela necessária para o teste.
CREATE TABLE itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL
);

-- (Opcional) Insira alguns dados para o teste inicial.
INSERT INTO itens (nome, quantidade) VALUES
('Item de Teste 1', 100),
('Item de Teste 2', 200);