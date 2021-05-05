var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIAYFLYSLWDT7KQBSNM", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

   
}

save();
        