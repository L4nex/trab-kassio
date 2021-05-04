const express = require('express');
const router = express.Router();
const service = require('./service/services');

router.get('/servico', async function(req, res){
    res.json("Sucesso!")
})

router.get('/exclui/:id', async function(req, res){
    const retorno = await service.deleteObj(req.params.id, res);
})

router.get('/recupera/:id', async function(req,res){
    const retorno = await service.readObj(req.params.id, res);
})

router.post('/altera', async function (req, res){
    const retorno = await service.alteraObj(req.body, res);
})
module.exports = router;