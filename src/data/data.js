const docClient = require('../dataBase/base');


exports.recuperaPelaChave = function (param, res) {
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
            res.json(data);
        }
    })
}

exports.remove = function(param, res) {
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

exports.altera = function (jsonAlterar, res) {
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
            res.json("Sucesso ao alterar o objeto. Retorno: " + data);
        }
    });
}
