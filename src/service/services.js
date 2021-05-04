const data = require('../data/data');

exports.deleteObj = function(param, res){
    return data.remove(param, res);
}

exports.readObj = function(param, res){
    return data.recuperaPelaChave(param, res);
}
exports.alteraObj = function(param, res){
    return data.altera(param, res);
}