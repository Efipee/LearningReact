// apiService.js (atualize o nome do arquivo para o correspondente)
import axios from 'axios';

let apiService;

export async function initializeApiService() {
  try {
    const res = await axios.get('http://192.168.2.6:3001/token');
    const token = res.data.token;
    apiService = axios.create({
      baseURL: 'http://192.168.2.6:3001',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return apiService; // Adicione esta linha para retornar o apiService após a inicialização
  } catch (error) {
    console.error("Error fetching token", error);
  }
}

export { apiService }; // Exporte a apiService diretamente
