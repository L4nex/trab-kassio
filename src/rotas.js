const express = require('express');
const router = express.Router();
const service = require('./service/services');

router.get('/servico', async function(req, res){
    res.json("Sucesso!")
})

router.delete('/excluir/:id', async function(req, res){
    const retorno = await service.removerObj(req.params.id, res);
})

router.get('/recuperar/:id', async function(req,res){
    const retorno = await service.removerObj(req.params.id, res);
})

router.get('/recuperarTodos', async function(req,res){
    const retorno = await service.recuperarTodos(res);
})

router.put('/alterar', async function (req, res){
    const retorno = await service.alterarObj(req.body, res);
})

router.patch("/inserir", async function (req, res){
    const retorno = await service.inserirObj(req.body, res);
})

module.exports = router;