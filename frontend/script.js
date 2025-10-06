// script.js - Apenas para testar se o frontend recebe os dados

// Espera a página carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
    const API_URL = 'http://localhost:3000/api/data'; // A URL da nossa única rota

    // Função para buscar os dados da API
    async function fetchData() {
        try {
            const response = await fetch(API_URL);
            
            // Verifica se a resposta da API foi bem-sucedida
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            const data = await response.json();
            
            // Exibe os dados no formato JSON dentro da tag <pre>
            // JSON.stringify(data, null, 2) formata o JSON para fácil leitura
            dataContainer.textContent = JSON.stringify(data, null, 2);

        } catch (error) {
            dataContainer.textContent = `Falha ao carregar dados: ${error.message}`;
            console.error('Erro no fetch:', error);
        }
    }

    // Chama a função para buscar os dados
    fetchData();
});