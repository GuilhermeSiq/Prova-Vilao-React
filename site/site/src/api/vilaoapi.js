import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrovilao(id, vilao, maldades, poder){
    const resposta = await api.post('/vilao', {
    id: id,
    vilao: vilao,    
    maldades: maldades,
    poder: poder,
    })
    return resposta.data;
}

export async function listavilao(){
  const resposta = await api.get('/viloes');
  return resposta.data;
}