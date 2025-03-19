const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON onde as notícias serão armazenadas
const caminhoArquivo = path.join(__dirname, 'news.json');

// Função para ler o arquivo JSON e retornar os dados
function lerNoticias() {
  const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
  return JSON.parse(dados).noticias;
}

// Função para salvar as notícias no arquivo JSON
function salvarNoticias(noticias) {
  const dados = { noticias };
  fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2));
}
