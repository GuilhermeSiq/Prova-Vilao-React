import { inserirvilao, listadeviloes } from '../repository/vilaorepository.js'

import { Router } from 'express'

const server = Router();

server.post('/vilao', async (req, resp) =>{
    try {
        const vilao = req.body;
        
        const vilaoinserir = await inserirvilao(vilao);

       resp.send(vilaoinserir)
    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/viloes', async (req, resp) => {
    try {
        const resposta = await listadeviloes();
        resp.send(resposta);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;