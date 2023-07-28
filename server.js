const express = require('express');
const path = require('path');
const app = express();
const port = 3002; // Escolha uma porta para o servidor

// Define a pasta onde os arquivos estáticos do React estão localizados
app.use(express.static(path.join(__dirname, 'build')));

// Rota para servir o arquivo index.html da aplicação React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
