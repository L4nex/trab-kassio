const data = require('../data/data');

exports.removerObj = function(param, res){
    return data.remover(param, res);
}

exports.recuperarPelaChave = function(param, res){
    return data.recuperarPelaChave(param, res);
}
exports.recuperarTodos = function(res){
    return data.recuperarTodos(res);
}
exports.alterarObj = function(param, res){
    return data.alterar(param, res);
}
exports.inserirObj = function(param, res){
    return data.inserir(param, res);
}