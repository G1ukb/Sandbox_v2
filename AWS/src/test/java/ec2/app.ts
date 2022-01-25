import express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

const mysql = require('mysql');
const aws = require('aws-sdk');
const fs = require('fs');
const config = require('./config.json');
const credentials = new aws.SharedIniFileCredentials({profile: 'faS3'});
const lambda = new aws.Lambda({credentials, region: 'eu-west-2'});

aws.config.setPromisesDependency();
aws.config.credentials = credentials;
const connection = mysql.createConnection({
    host: 'task8-db.ceryehnev314.eu-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'gluk1011',
    database: 'task_8'
});

const s3 = new aws.S3();
const sns = new aws.SNS({credentials, region: 'eu-west-2'});
const sqs = new aws.SQS({credentials, region: 'eu-west-2'});

let promises: any[] = [];
let sqsMsg: any[] = [];

app.get("/", (req, res) => {
    res.send("You are Welcome!")
})

app.get("/s3/get-image/:name", async (req, res, next) => {
    getImageByName(req.params.name).then((img) => {
        // let msg = {
        //     msg: "get image is done",
        //     name: req.params.name,
        //     data: img.ETag
        // }
        // publishSNSMsg(msg, config.SNS.TopicArn);

        let image = "<img src='data:image/jpg;base64," + encode(img.Body) + "'" + "/>";
        let startHTML = "<html><body>";
        let endHTML = "</body></html>";
        let html = startHTML + image + endHTML;
        res.send(html)
    }).catch((e) => {
        res.send(e)
    });
});

app.get("/s3/get-image/:name", async (req, res, next) => {

});

app.post("/s3/upload-image", async (req, res, next) => {
    fs.readFile('./upload/image.jpg', (err: any, data: any) => {
        if (err) throw err;
        const s3Params = {
            Bucket: config.S3.S3_Name,
            Key: 'uploadedImage',
            Body: JSON.stringify(data, null, 2)
        };
        s3.upload(s3Params, function (s3Err: any, data: any) {
            if (s3Err) throw s3Err
            console.log(`File uploaded successfully at ${data.Location}`)
            // connection.query('INSERT INTO `task_8`.`image_metadata` (`ETag`, `image_name`) VALUES(\'' + data.ETag + '\', \'' + data.key + '\');',
            //     function (error: any, result: any, fields: any) {
            //         if (error) console.log(error)
            //     });
            res.send(data);
        });
    });
});

app.delete("/s3/delete-image/:name", async (req, res, next) => {
    const s3Params = {
        Bucket: config.S3.S3_Name,
        Key: req.params.name
    }
    s3.deleteObject(s3Params, function (err: any, data: any) {
        if (err) console.log(err, err.stack);  // error
        else console.log('deleted');       // deleted

        // connection.query('DELETE FROM `task_8`.`image_metadata` WHERE (`image_name` = \'' + req.params.name + '\');',
        //     function (error: any, result: any, fields: any) {
        //         if (error) console.log(error)
        //     });
        res.send('deleted');
    });
});

app.get("/aws-sql/show-all-metadata", async (req, res, next) => {
    res.send("MySQL feature disabled!")
    // connection.query('SELECT * FROM task_8.image_metadata', function (error: any, result: any, fields: any) {
    //     console.log(result)
    //     res.send(result);
    // });
});

app.get("/aws-sql/get-random-metadata", async (req, res, next) => {
    res.send("MySQL feature disabled!")
    // connection.query('SELECT * FROM `task_8`.`image_metadata` ORDER BY RAND() LIMIT 1',
    //     function (error: any, result: any, fields: any) {
    //         if (error) console.log(error)
    //         res.send(result);
    //     });
});

app.post("/email/subscribe/:email", async (req, res, next) => {
    var params = {
        Protocol: 'EMAIL', /* required */
        TopicArn: config.SNS.TopicArn, /* required */
        Endpoint: req.params.email
    };
    sns.subscribe(params, (err: any, data: any) => {
        if (err) {
            res.send(err);
            console.error(err);
        } else {
            res.send("Subscription ARN is " + data.SubscriptionArn);
        }
    });
});

app.post("/email/unsubscribe/:email", async (req, res, next) => {
    var params = {
        TopicArn: config.SNS.TopicArn
    };
    sns.listSubscriptionsByTopic(params, (err: any, data: any) => {
        if (err) {
            res.send(err);
            console.error(err);
        }
        if (data) {
            data.Subscriptions.forEach((subs: any) => {
                if (subs.Protocol === 'email' && subs.Endpoint === req.params.email) {
                    sns.unsubscribe({SubscriptionArn: subs.SubscriptionArn}, (err: any, data: any) => {
                        if (err) {
                            res.send(err);
                            console.error(err);
                        }
                        if (data) {
                            res.send(data);
                        }
                    });
                }
            });
        }
    });
});

app.post("/sqs/getMessages", async (req, res) => {
    receiveSQSMessage();
    Promise.all(promises).then(function () {
        publishSNSMsg(sqsMsg, config.SNS.EmailArn);
        res.send(sqsMsg);
    })
})

app.post("/lambda/lambdaTrigger", async (req, res, next) => {
    const params = {
        FunctionName: "Task10-uploads-batch-notifier",
        InvocationType: "RequestResponse",
        Payload: '{}'
    };
    await lambda.invoke(params).promise().then(function (result: any) {
        console.log(result);
        res.send(result);
    });
});

async function getImageByName(name: String) {
    try {
        const s3Params = {
            Bucket: config.S3.S3_Name,
            Key: name
        }
        const data = s3.getObject(s3Params, function () {
        }).promise();
        console.log(data);
        return data;
    } catch (e) {
        console.log('error: ', e);
    }
}

function encode(data: any) {
    let buf = Buffer.from(data);
    let base64 = buf.toString('base64');
    return base64
}

function receiveSQSMessage() {
    const params = {
        MessageAttributeNames: ["All"],
        QueueUrl: config.SQS.SQS_URL,
        MaxNumberOfMessages: 1,
        VisibilityTimeout: 0,
        WaitTimeSeconds: 0
    };
    let sqsPromise = sqs.receiveMessage(params).promise();
    promises.push(sqsPromise);

    sqsPromise.then(function (result: any) {
        if (result.Messages) {
            sqsMsg.push(JSON.parse(result.Messages[0].Body).Message)
            var deleteParams = {
                QueueUrl: config.SQS.SQS_URL,
                ReceiptHandle: result.Messages[0].ReceiptHandle
            };
            sqs.deleteMessage(deleteParams, function(err:any, deleteData:any) {
                if (err) {
                    console.log("Delete Error", err);
                } else {
                    receiveSQSMessage();
                }
            });
        }
    });
}

function publishSNSMsg(messageObject: any, topicArn: string) {
    var snsParams = {
        Message: JSON.stringify(messageObject),
        TopicArn: topicArn,
        MessageAttributes: {
            'KEY': { DataType: 'String', StringValue: 'Test' },
        }
    };
    sns.publish(snsParams, (err: any, data: any) => {
        console.log(data);
        if (err) {
            console.error(err);
        }
    });
}