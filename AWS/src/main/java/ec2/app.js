"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
const mysql = require('mysql');
const aws = require('aws-sdk');
const fs = require('fs');
const credentials = new aws.SharedIniFileCredentials({ profile: 'default' });
const config = require('./config.json');
const lambda = new aws.Lambda({ credentials, region: 'eu-west-2' });
aws.config.setPromisesDependency();
aws.config.update({
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretKey,
    region: config.aws.region
});
const connection = mysql.createConnection({
    host: 'task8-db.ceryehnev314.eu-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'gluk1011',
    database: 'task_8'
});
const s3 = new aws.S3();
const sns = new aws.SNS({ credentials, region: 'eu-west-2' });
const sqs = new aws.SQS({ credentials, region: 'eu-west-2' });
let promises = [];
let sqsMsg = [];
app.get("/", (req, res) => {
    res.send("You are Welcome!");
});
app.get("/task8/get-image/:name", async (req, res, next) => {
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
        res.send(html);
    }).catch((e) => {
        res.send(e);
    });
});
app.get("/task8/show-all", async (req, res, next) => {
    res.send("MySQL feature disabled!");
    // connection.query('SELECT * FROM task_8.image_metadata', function (error: any, result: any, fields: any) {
    //     console.log(result)
    //     res.send(result);
    // });
});
app.post("/task8/upload", async (req, res, next) => {
    fs.readFile('./upload/image.jpg', (err, data) => {
        if (err)
            throw err;
        const s3Params = {
            Bucket: 'belski.s3.bucket',
            Key: 'uploadedImage',
            Body: JSON.stringify(data, null, 2)
        };
        s3.upload(s3Params, function (s3Err, data) {
            if (s3Err)
                throw s3Err;
            console.log(`File uploaded successfully at ${data.Location}`);
            // connection.query('INSERT INTO `task_8`.`image_metadata` (`ETag`, `image_name`) VALUES(\'' + data.ETag + '\', \'' + data.key + '\');',
            //     function (error: any, result: any, fields: any) {
            //         if (error) console.log(error)
            //     });
            res.send(data);
        });
    });
});
app.delete("/task8/delete-image/:name", async (req, res, next) => {
    const s3Params = {
        Bucket: 'belski.s3.bucket',
        Key: req.params.name
    };
    s3.deleteObject(s3Params, function (err, data) {
        if (err)
            console.log(err, err.stack); // error
        else
            console.log('deleted'); // deleted
        // connection.query('DELETE FROM `task_8`.`image_metadata` WHERE (`image_name` = \'' + req.params.name + '\');',
        //     function (error: any, result: any, fields: any) {
        //         if (error) console.log(error)
        //     });
        res.send('deleted');
    });
});
app.get("/task8/get-random-metadata", async (req, res, next) => {
    res.send("MySQL feature disabled!");
    // connection.query('SELECT * FROM `task_8`.`image_metadata` ORDER BY RAND() LIMIT 1',
    //     function (error: any, result: any, fields: any) {
    //         if (error) console.log(error)
    //         res.send(result);
    //     });
});
// app.post("/task9/subscribe/:email", async (req, res, next) => {
//     var params = {
//         Protocol: 'EMAIL', /* required */
//         TopicArn: config.SNS.TopicArn, /* required */
//         Endpoint: req.params.email
//     };
//
//     sns.subscribe(params, (err: any, data: any) => {
//         if (err) {
//             res.send(err);
//             console.error(err);
//         } else {
//             res.send("Subscription ARN is " + data.SubscriptionArn);
//         }
//     });
// });
//
// app.post("/task9/unsubscribe/:email", async (req, res, next) => {
//     var params = {
//         TopicArn: config.SNS.TopicArn
//     };
//
//     sns.listSubscriptionsByTopic(params, (err: any, data: any) => {
//         if (err) {
//             res.send(err);
//             console.error(err);
//         }
//         if (data) {
//             data.Subscriptions.forEach((subs: any) => {
//                 if (subs.Protocol === 'email' && subs.Endpoint === req.params.email) {
//                     sns.unsubscribe({SubscriptionArn: subs.SubscriptionArn}, (err: any, data: any) => {
//                         if (err) {
//                             res.send(err);
//                             console.error(err);
//                         }
//                         if (data) {
//                             res.send(data);
//                         }
//                     });
//                 }
//             });
//         }
//     });
// });
// app.post("/task9/sqs/getMessages", async (req, res) => {
//     receiveSQSMessage();
//     Promise.all(promises).then(function () {
//         publishSNSMsg(sqsMsg, config.SNS.EmailArn);
//         res.send(sqsMsg);
//     })
// })
app.post("/task10/lambdaTrigger", async (req, res, next) => {
    const params = {
        FunctionName: "Task10-uploads-batch-notifier",
        InvocationType: "RequestResponse",
        Payload: '{}'
    };
    await lambda.invoke(params).promise().then(function (result) {
        console.log(result);
        res.send(result);
    });
});
async function getImageByName(name) {
    try {
        const s3Params = {
            Bucket: 'belski.s3.bucket',
            Key: name
        };
        const data = s3.getObject(s3Params, function () {
        }).promise();
        console.log(data);
        return data;
    }
    catch (e) {
        console.log('error: ', e);
    }
}
function encode(data) {
    let buf = Buffer.from(data);
    let base64 = buf.toString('base64');
    return base64;
}
// function receiveSQSMessage() {
//     const params = {
//         MessageAttributeNames: ["All"],
//         QueueUrl: config.SQS.SQS_URL,
//         MaxNumberOfMessages: 1,
//         VisibilityTimeout: 0,
//         WaitTimeSeconds: 0
//     };
//     let sqsPromise = sqs.receiveMessage(params).promise();
//     promises.push(sqsPromise);
//
//     sqsPromise.then(function (result: any) {
//         if (result.Messages) {
//             sqsMsg.push(JSON.parse(result.Messages[0].Body).Message)
//             var deleteParams = {
//                 QueueUrl: config.SQS.SQS_URL,
//                 ReceiptHandle: result.Messages[0].ReceiptHandle
//             };
//             sqs.deleteMessage(deleteParams, function(err:any, deleteData:any) {
//                 if (err) {
//                     console.log("Delete Error", err);
//                 } else {
//                     receiveSQSMessage();
//                 }
//             });
//         }
//     });
// }
//
// function publishSNSMsg(messageObject: any, topicArn: string) {
//     var snsParams = {
//         Message: JSON.stringify(messageObject),
//         TopicArn: topicArn,
//         MessageAttributes: {
//             'KEY': { DataType: 'String', StringValue: 'Test' },
//         }
//     };
//     sns.publish(snsParams, (err: any, data: any) => {
//         console.log(data);
//         if (err) {
//             console.error(err);
//         }
//     });
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW9DO0FBRXBDLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO0FBQzNFLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN4QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFFbEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2QsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVztJQUNuQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTO0lBQ3JDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU07Q0FDNUIsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0lBQ3RDLElBQUksRUFBRSxtREFBbUQ7SUFDekQsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsT0FBTztJQUNiLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFFBQVEsRUFBRSxRQUFRO0NBQ3JCLENBQUMsQ0FBQztBQUVILE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztBQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFFNUQsSUFBSSxRQUFRLEdBQVUsRUFBRSxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztBQUV2QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7QUFDaEMsQ0FBQyxDQUFDLENBQUE7QUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3ZELGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3pDLGNBQWM7UUFDZCxnQ0FBZ0M7UUFDaEMsNkJBQTZCO1FBQzdCLHFCQUFxQjtRQUNyQixJQUFJO1FBQ0osMkNBQTJDO1FBRTNDLElBQUksS0FBSyxHQUFHLGtDQUFrQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUMvRSxJQUFJLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsSUFBSSxJQUFJLEdBQUcsU0FBUyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDZixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFDbkMsNEdBQTRHO0lBQzVHLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsTUFBTTtBQUNWLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEdBQVEsRUFBRSxJQUFTLEVBQUUsRUFBRTtRQUN0RCxJQUFJLEdBQUc7WUFBRSxNQUFNLEdBQUcsQ0FBQztRQUNuQixNQUFNLFFBQVEsR0FBRztZQUNiLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsR0FBRyxFQUFFLGVBQWU7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDdEMsQ0FBQztRQUNGLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQVUsS0FBVSxFQUFFLElBQVM7WUFDL0MsSUFBSSxLQUFLO2dCQUFFLE1BQU0sS0FBSyxDQUFBO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQzdELHdJQUF3STtZQUN4SSx3REFBd0Q7WUFDeEQsd0NBQXdDO1lBQ3hDLFVBQVU7WUFDVixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDN0QsTUFBTSxRQUFRLEdBQUc7UUFDYixNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUk7S0FDdkIsQ0FBQTtJQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFVBQVUsR0FBUSxFQUFFLElBQVM7UUFDbkQsSUFBSSxHQUFHO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUUsUUFBUTs7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFPLFVBQVU7UUFFN0MsZ0hBQWdIO1FBQ2hILHdEQUF3RDtRQUN4RCx3Q0FBd0M7UUFDeEMsVUFBVTtRQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDM0QsR0FBRyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0lBQ25DLHNGQUFzRjtJQUN0Rix3REFBd0Q7SUFDeEQsd0NBQXdDO0lBQ3hDLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2QsQ0FBQyxDQUFDLENBQUM7QUFFSCxrRUFBa0U7QUFDbEUscUJBQXFCO0FBQ3JCLDRDQUE0QztBQUM1Qyx3REFBd0Q7QUFDeEQscUNBQXFDO0FBQ3JDLFNBQVM7QUFDVCxFQUFFO0FBQ0YsdURBQXVEO0FBQ3ZELHFCQUFxQjtBQUNyQiw2QkFBNkI7QUFDN0Isa0NBQWtDO0FBQ2xDLG1CQUFtQjtBQUNuQix1RUFBdUU7QUFDdkUsWUFBWTtBQUNaLFVBQVU7QUFDVixNQUFNO0FBQ04sRUFBRTtBQUNGLG9FQUFvRTtBQUNwRSxxQkFBcUI7QUFDckIsd0NBQXdDO0FBQ3hDLFNBQVM7QUFDVCxFQUFFO0FBQ0Ysc0VBQXNFO0FBQ3RFLHFCQUFxQjtBQUNyQiw2QkFBNkI7QUFDN0Isa0NBQWtDO0FBQ2xDLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsMERBQTBEO0FBQzFELHlGQUF5RjtBQUN6RiwwR0FBMEc7QUFDMUcscUNBQXFDO0FBQ3JDLDZDQUE2QztBQUM3QyxrREFBa0Q7QUFDbEQsNEJBQTRCO0FBQzVCLHNDQUFzQztBQUN0Qyw4Q0FBOEM7QUFDOUMsNEJBQTRCO0FBQzVCLDBCQUEwQjtBQUMxQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixVQUFVO0FBQ1YsTUFBTTtBQUVOLDJEQUEyRDtBQUMzRCwyQkFBMkI7QUFDM0IsK0NBQStDO0FBQy9DLHNEQUFzRDtBQUN0RCw0QkFBNEI7QUFDNUIsU0FBUztBQUNULEtBQUs7QUFFTCxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3ZELE1BQU0sTUFBTSxHQUFHO1FBQ1gsWUFBWSxFQUFFLCtCQUErQjtRQUM3QyxjQUFjLEVBQUUsaUJBQWlCO1FBQ2pDLE9BQU8sRUFBRSxJQUFJO0tBQ2hCLENBQUM7SUFDRixNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBVztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssVUFBVSxjQUFjLENBQUMsSUFBWTtJQUN0QyxJQUFJO1FBQ0EsTUFBTSxRQUFRLEdBQUc7WUFDYixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLEdBQUcsRUFBRSxJQUFJO1NBQ1osQ0FBQTtRQUVELE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1FBQ3BDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQztLQUNmO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM3QjtBQUNMLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxJQUFTO0lBQ3JCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxPQUFPLE1BQU0sQ0FBQTtBQUNqQixDQUFDO0FBRUQsaUNBQWlDO0FBQ2pDLHVCQUF1QjtBQUN2QiwwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBQ3hDLGtDQUFrQztBQUNsQyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLFNBQVM7QUFDVCw2REFBNkQ7QUFDN0QsaUNBQWlDO0FBQ2pDLEVBQUU7QUFDRiwrQ0FBK0M7QUFDL0MsaUNBQWlDO0FBQ2pDLHVFQUF1RTtBQUN2RSxtQ0FBbUM7QUFDbkMsZ0RBQWdEO0FBQ2hELGtFQUFrRTtBQUNsRSxpQkFBaUI7QUFDakIsa0ZBQWtGO0FBQ2xGLDZCQUE2QjtBQUM3Qix3REFBd0Q7QUFDeEQsMkJBQTJCO0FBQzNCLDJDQUEyQztBQUMzQyxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixVQUFVO0FBQ1YsSUFBSTtBQUNKLEVBQUU7QUFDRixpRUFBaUU7QUFDakUsd0JBQXdCO0FBQ3hCLGtEQUFrRDtBQUNsRCw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLGtFQUFrRTtBQUNsRSxZQUFZO0FBQ1osU0FBUztBQUNULHdEQUF3RDtBQUN4RCw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLGtDQUFrQztBQUNsQyxZQUFZO0FBQ1osVUFBVTtBQUNWLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBydW5uaW5nIG9uIHBvcnQgMzAwMFwiKTtcclxufSk7XHJcblxyXG5jb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsJyk7XHJcbmNvbnN0IGF3cyA9IHJlcXVpcmUoJ2F3cy1zZGsnKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBjcmVkZW50aWFscyA9IG5ldyBhd3MuU2hhcmVkSW5pRmlsZUNyZWRlbnRpYWxzKHtwcm9maWxlOiAnZGVmYXVsdCd9KTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanNvbicpO1xyXG5jb25zdCBsYW1iZGEgPSBuZXcgYXdzLkxhbWJkYSh7Y3JlZGVudGlhbHMsIHJlZ2lvbjogJ2V1LXdlc3QtMid9KTtcclxuXHJcbmF3cy5jb25maWcuc2V0UHJvbWlzZXNEZXBlbmRlbmN5KCk7XHJcbmF3cy5jb25maWcudXBkYXRlKHtcclxuICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYXdzLmFjY2Vzc0tleUlkLFxyXG4gICAgc2VjcmV0QWNjZXNzS2V5OiBjb25maWcuYXdzLnNlY3JldEtleSxcclxuICAgIHJlZ2lvbjogY29uZmlnLmF3cy5yZWdpb25cclxufSk7XHJcbmNvbnN0IGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgIGhvc3Q6ICd0YXNrOC1kYi5jZXJ5ZWhuZXYzMTQuZXUtd2VzdC0yLnJkcy5hbWF6b25hd3MuY29tJyxcclxuICAgIHBvcnQ6ICczMzA2JyxcclxuICAgIHVzZXI6ICdhZG1pbicsXHJcbiAgICBwYXNzd29yZDogJ2dsdWsxMDExJyxcclxuICAgIGRhdGFiYXNlOiAndGFza184J1xyXG59KTtcclxuXHJcbmNvbnN0IHMzID0gbmV3IGF3cy5TMygpO1xyXG5jb25zdCBzbnMgPSBuZXcgYXdzLlNOUyh7Y3JlZGVudGlhbHMsIHJlZ2lvbjogJ2V1LXdlc3QtMid9KTtcclxuY29uc3Qgc3FzID0gbmV3IGF3cy5TUVMoe2NyZWRlbnRpYWxzLCByZWdpb246ICdldS13ZXN0LTInfSk7XHJcblxyXG5sZXQgcHJvbWlzZXM6IGFueVtdID0gW107XHJcbmxldCBzcXNNc2c6IGFueVtdID0gW107XHJcblxyXG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHtcclxuICAgIHJlcy5zZW5kKFwiWW91IGFyZSBXZWxjb21lIVwiKVxyXG59KVxyXG5cclxuYXBwLmdldChcIi90YXNrOC9nZXQtaW1hZ2UvOm5hbWVcIiwgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICBnZXRJbWFnZUJ5TmFtZShyZXEucGFyYW1zLm5hbWUpLnRoZW4oKGltZykgPT4ge1xyXG4gICAgICAgIC8vIGxldCBtc2cgPSB7XHJcbiAgICAgICAgLy8gICAgIG1zZzogXCJnZXQgaW1hZ2UgaXMgZG9uZVwiLFxyXG4gICAgICAgIC8vICAgICBuYW1lOiByZXEucGFyYW1zLm5hbWUsXHJcbiAgICAgICAgLy8gICAgIGRhdGE6IGltZy5FVGFnXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHB1Ymxpc2hTTlNNc2cobXNnLCBjb25maWcuU05TLlRvcGljQXJuKTtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gXCI8aW1nIHNyYz0nZGF0YTppbWFnZS9qcGc7YmFzZTY0LFwiICsgZW5jb2RlKGltZy5Cb2R5KSArIFwiJ1wiICsgXCIvPlwiO1xyXG4gICAgICAgIGxldCBzdGFydEhUTUwgPSBcIjxodG1sPjxib2R5PlwiO1xyXG4gICAgICAgIGxldCBlbmRIVE1MID0gXCI8L2JvZHk+PC9odG1sPlwiO1xyXG4gICAgICAgIGxldCBodG1sID0gc3RhcnRIVE1MICsgaW1hZ2UgKyBlbmRIVE1MO1xyXG4gICAgICAgIHJlcy5zZW5kKGh0bWwpXHJcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHJlcy5zZW5kKGUpXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL3Rhc2s4L3Nob3ctYWxsXCIsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgcmVzLnNlbmQoXCJNeVNRTCBmZWF0dXJlIGRpc2FibGVkIVwiKVxyXG4gICAgLy8gY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSB0YXNrXzguaW1hZ2VfbWV0YWRhdGEnLCBmdW5jdGlvbiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnksIGZpZWxkczogYW55KSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgLy8gICAgIHJlcy5zZW5kKHJlc3VsdCk7XHJcbiAgICAvLyB9KTtcclxufSk7XHJcblxyXG5hcHAucG9zdChcIi90YXNrOC91cGxvYWRcIiwgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICBmcy5yZWFkRmlsZSgnLi91cGxvYWQvaW1hZ2UuanBnJywgKGVycjogYW55LCBkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgY29uc3QgczNQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIEJ1Y2tldDogJ2JlbHNraS5zMy5idWNrZXQnLFxyXG4gICAgICAgICAgICBLZXk6ICd1cGxvYWRlZEltYWdlJyxcclxuICAgICAgICAgICAgQm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMilcclxuICAgICAgICB9O1xyXG4gICAgICAgIHMzLnVwbG9hZChzM1BhcmFtcywgZnVuY3Rpb24gKHMzRXJyOiBhbnksIGRhdGE6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoczNFcnIpIHRocm93IHMzRXJyXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseSBhdCAke2RhdGEuTG9jYXRpb259YClcclxuICAgICAgICAgICAgLy8gY29ubmVjdGlvbi5xdWVyeSgnSU5TRVJUIElOVE8gYHRhc2tfOGAuYGltYWdlX21ldGFkYXRhYCAoYEVUYWdgLCBgaW1hZ2VfbmFtZWApIFZBTFVFUyhcXCcnICsgZGF0YS5FVGFnICsgJ1xcJywgXFwnJyArIGRhdGEua2V5ICsgJ1xcJyk7JyxcclxuICAgICAgICAgICAgLy8gICAgIGZ1bmN0aW9uIChlcnJvcjogYW55LCByZXN1bHQ6IGFueSwgZmllbGRzOiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZXJyb3IpIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcy5zZW5kKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuYXBwLmRlbGV0ZShcIi90YXNrOC9kZWxldGUtaW1hZ2UvOm5hbWVcIiwgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICBjb25zdCBzM1BhcmFtcyA9IHtcclxuICAgICAgICBCdWNrZXQ6ICdiZWxza2kuczMuYnVja2V0JyxcclxuICAgICAgICBLZXk6IHJlcS5wYXJhbXMubmFtZVxyXG4gICAgfVxyXG4gICAgczMuZGVsZXRlT2JqZWN0KHMzUGFyYW1zLCBmdW5jdGlvbiAoZXJyOiBhbnksIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKGVyciwgZXJyLnN0YWNrKTsgIC8vIGVycm9yXHJcbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZygnZGVsZXRlZCcpOyAgICAgICAvLyBkZWxldGVkXHJcblxyXG4gICAgICAgIC8vIGNvbm5lY3Rpb24ucXVlcnkoJ0RFTEVURSBGUk9NIGB0YXNrXzhgLmBpbWFnZV9tZXRhZGF0YWAgV0hFUkUgKGBpbWFnZV9uYW1lYCA9IFxcJycgKyByZXEucGFyYW1zLm5hbWUgKyAnXFwnKTsnLFxyXG4gICAgICAgIC8vICAgICBmdW5jdGlvbiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnksIGZpZWxkczogYW55KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZXJyb3IpIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICByZXMuc2VuZCgnZGVsZXRlZCcpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi90YXNrOC9nZXQtcmFuZG9tLW1ldGFkYXRhXCIsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgcmVzLnNlbmQoXCJNeVNRTCBmZWF0dXJlIGRpc2FibGVkIVwiKVxyXG4gICAgLy8gY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBgdGFza184YC5gaW1hZ2VfbWV0YWRhdGFgIE9SREVSIEJZIFJBTkQoKSBMSU1JVCAxJyxcclxuICAgIC8vICAgICBmdW5jdGlvbiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnksIGZpZWxkczogYW55KSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChlcnJvcikgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAvLyAgICAgICAgIHJlcy5zZW5kKHJlc3VsdCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gYXBwLnBvc3QoXCIvdGFzazkvc3Vic2NyaWJlLzplbWFpbFwiLCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuLy8gICAgIHZhciBwYXJhbXMgPSB7XHJcbi8vICAgICAgICAgUHJvdG9jb2w6ICdFTUFJTCcsIC8qIHJlcXVpcmVkICovXHJcbi8vICAgICAgICAgVG9waWNBcm46IGNvbmZpZy5TTlMuVG9waWNBcm4sIC8qIHJlcXVpcmVkICovXHJcbi8vICAgICAgICAgRW5kcG9pbnQ6IHJlcS5wYXJhbXMuZW1haWxcclxuLy8gICAgIH07XHJcbi8vXHJcbi8vICAgICBzbnMuc3Vic2NyaWJlKHBhcmFtcywgKGVycjogYW55LCBkYXRhOiBhbnkpID0+IHtcclxuLy8gICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICAgIHJlcy5zZW5kKGVycik7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXMuc2VuZChcIlN1YnNjcmlwdGlvbiBBUk4gaXMgXCIgKyBkYXRhLlN1YnNjcmlwdGlvbkFybik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG4vL1xyXG4vLyBhcHAucG9zdChcIi90YXNrOS91bnN1YnNjcmliZS86ZW1haWxcIiwgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbi8vICAgICB2YXIgcGFyYW1zID0ge1xyXG4vLyAgICAgICAgIFRvcGljQXJuOiBjb25maWcuU05TLlRvcGljQXJuXHJcbi8vICAgICB9O1xyXG4vL1xyXG4vLyAgICAgc25zLmxpc3RTdWJzY3JpcHRpb25zQnlUb3BpYyhwYXJhbXMsIChlcnI6IGFueSwgZGF0YTogYW55KSA9PiB7XHJcbi8vICAgICAgICAgaWYgKGVycikge1xyXG4vLyAgICAgICAgICAgICByZXMuc2VuZChlcnIpO1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmIChkYXRhKSB7XHJcbi8vICAgICAgICAgICAgIGRhdGEuU3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWJzOiBhbnkpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGlmIChzdWJzLlByb3RvY29sID09PSAnZW1haWwnICYmIHN1YnMuRW5kcG9pbnQgPT09IHJlcS5wYXJhbXMuZW1haWwpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzbnMudW5zdWJzY3JpYmUoe1N1YnNjcmlwdGlvbkFybjogc3Vicy5TdWJzY3JpcHRpb25Bcm59LCAoZXJyOiBhbnksIGRhdGE6IGFueSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc2VuZChlcnIpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc2VuZChkYXRhKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG4vLyBhcHAucG9zdChcIi90YXNrOS9zcXMvZ2V0TWVzc2FnZXNcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgICByZWNlaXZlU1FTTWVzc2FnZSgpO1xyXG4vLyAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIHB1Ymxpc2hTTlNNc2coc3FzTXNnLCBjb25maWcuU05TLkVtYWlsQXJuKTtcclxuLy8gICAgICAgICByZXMuc2VuZChzcXNNc2cpO1xyXG4vLyAgICAgfSlcclxuLy8gfSlcclxuXHJcbmFwcC5wb3N0KFwiL3Rhc2sxMC9sYW1iZGFUcmlnZ2VyXCIsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgIEZ1bmN0aW9uTmFtZTogXCJUYXNrMTAtdXBsb2Fkcy1iYXRjaC1ub3RpZmllclwiLFxyXG4gICAgICAgIEludm9jYXRpb25UeXBlOiBcIlJlcXVlc3RSZXNwb25zZVwiLFxyXG4gICAgICAgIFBheWxvYWQ6ICd7fSdcclxuICAgIH07XHJcbiAgICBhd2FpdCBsYW1iZGEuaW52b2tlKHBhcmFtcykucHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdDogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICByZXMuc2VuZChyZXN1bHQpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2VCeU5hbWUobmFtZTogU3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHMzUGFyYW1zID0ge1xyXG4gICAgICAgICAgICBCdWNrZXQ6ICdiZWxza2kuczMuYnVja2V0JyxcclxuICAgICAgICAgICAgS2V5OiBuYW1lXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gczMuZ2V0T2JqZWN0KHMzUGFyYW1zLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfSkucHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJywgZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuY29kZShkYXRhOiBhbnkpIHtcclxuICAgIGxldCBidWYgPSBCdWZmZXIuZnJvbShkYXRhKTtcclxuICAgIGxldCBiYXNlNjQgPSBidWYudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG4gICAgcmV0dXJuIGJhc2U2NFxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiByZWNlaXZlU1FTTWVzc2FnZSgpIHtcclxuLy8gICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuLy8gICAgICAgICBNZXNzYWdlQXR0cmlidXRlTmFtZXM6IFtcIkFsbFwiXSxcclxuLy8gICAgICAgICBRdWV1ZVVybDogY29uZmlnLlNRUy5TUVNfVVJMLFxyXG4vLyAgICAgICAgIE1heE51bWJlck9mTWVzc2FnZXM6IDEsXHJcbi8vICAgICAgICAgVmlzaWJpbGl0eVRpbWVvdXQ6IDAsXHJcbi8vICAgICAgICAgV2FpdFRpbWVTZWNvbmRzOiAwXHJcbi8vICAgICB9O1xyXG4vLyAgICAgbGV0IHNxc1Byb21pc2UgPSBzcXMucmVjZWl2ZU1lc3NhZ2UocGFyYW1zKS5wcm9taXNlKCk7XHJcbi8vICAgICBwcm9taXNlcy5wdXNoKHNxc1Byb21pc2UpO1xyXG4vL1xyXG4vLyAgICAgc3FzUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQ6IGFueSkge1xyXG4vLyAgICAgICAgIGlmIChyZXN1bHQuTWVzc2FnZXMpIHtcclxuLy8gICAgICAgICAgICAgc3FzTXNnLnB1c2goSlNPTi5wYXJzZShyZXN1bHQuTWVzc2FnZXNbMF0uQm9keSkuTWVzc2FnZSlcclxuLy8gICAgICAgICAgICAgdmFyIGRlbGV0ZVBhcmFtcyA9IHtcclxuLy8gICAgICAgICAgICAgICAgIFF1ZXVlVXJsOiBjb25maWcuU1FTLlNRU19VUkwsXHJcbi8vICAgICAgICAgICAgICAgICBSZWNlaXB0SGFuZGxlOiByZXN1bHQuTWVzc2FnZXNbMF0uUmVjZWlwdEhhbmRsZVxyXG4vLyAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgICAgICBzcXMuZGVsZXRlTWVzc2FnZShkZWxldGVQYXJhbXMsIGZ1bmN0aW9uKGVycjphbnksIGRlbGV0ZURhdGE6YW55KSB7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGUgRXJyb3JcIiwgZXJyKTtcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZVNRU01lc3NhZ2UoKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gcHVibGlzaFNOU01zZyhtZXNzYWdlT2JqZWN0OiBhbnksIHRvcGljQXJuOiBzdHJpbmcpIHtcclxuLy8gICAgIHZhciBzbnNQYXJhbXMgPSB7XHJcbi8vICAgICAgICAgTWVzc2FnZTogSlNPTi5zdHJpbmdpZnkobWVzc2FnZU9iamVjdCksXHJcbi8vICAgICAgICAgVG9waWNBcm46IHRvcGljQXJuLFxyXG4vLyAgICAgICAgIE1lc3NhZ2VBdHRyaWJ1dGVzOiB7XHJcbi8vICAgICAgICAgICAgICdLRVknOiB7IERhdGFUeXBlOiAnU3RyaW5nJywgU3RyaW5nVmFsdWU6ICdUZXN0JyB9LFxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcbi8vICAgICBzbnMucHVibGlzaChzbnNQYXJhbXMsIChlcnI6IGFueSwgZGF0YTogYW55KSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbi8vICAgICAgICAgaWYgKGVycikge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vIH0iXX0=