var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIAYFLYSLWDT7KQBSNM", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = {
        "chave": "Testeeeee", "created_by": "Luiz", "ID": "2"
    };
    var params = {
        TableName: "padaria",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" );                      
        }
    });
}

save();
        