const docClient = require('../dataBase/base');


exports.recuperarTodos = function(res){
    var parametros = {TableName: "padaria"}

    docClient.scan(parametros, function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(data);
        }
    })
    
}

exports.recuperarPelaChave = function (param, res) {
    var parametros = {
        TableName: "padaria",
        Key: {
            "chave": param
        }
    };
    docClient.get(parametros, function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            if(data.Item === undefined){
                res.json("Não foram encontrados registros")
              
            } else {
                res.json(data);
            }
            
        }
    })
}

exports.remover = function(param, res) {
    var parametros = {
        TableName: "padaria",
        Key: {
            "chave": param
        }
    }
    docClient.delete(parametros, function (err, data) {
        if (err) {
            res.json("Erro ao deletar objeto.  Erro: " + JSON.stringify(err, null, 2));
        } else {
            res.json("Delete feito com sucesso!");
        }
    });
}

exports.alterar = function (jsonAlterar, res) {
    var parametros = {
        TableName: "padaria",
        Key: { "chave": jsonAlterar.chave },
        UpdateExpression: jsonAlterar.expressaoUpdate,
        ExpressionAttributeValues: jsonAlterar.valoresExpressao,
        ReturnValues: "UPDATED_NEW"
    }
    docClient.update(parametros, function (err, data) {

        if (err) {
            res.json("Erro ao alterar objeto. Erro: " + err);
        } else {
            res.json("Sucesso ao alterar o objeto.");
        }
    });
}

exports.inserir = function(jsonInserir, res){

    var params = {
        TableName: "padaria",
        Item:  jsonInserir.parametrosInsert
    };
    docClient.put(params, function (err, data) {

        if (err) {
            res.json("Erro ao inserir objeto. Erro: " + err);                     
        } else {
            res.json("Sucesso ao inserir item")                  
        }
    });
}
