'use strict';

const AWS = require('aws-sdk');
const SES = new AWS.SES();

function sendEmail(formData, callback){
  const emailParams = {
    Source: 'AlonsoGonzalez0x7c8@gmail.com',
    ReplyToAddresses: [formData.reply_to],
    Destination: {
      ToAddresses: ['AlonsoGonzalez0x7c8@gmail.com'],
    },
    Message :{
      Body : {
        Text : {
          Charset: 'UTF-8',
          Data: `$(formData.message}\n\nName:$(formData.name}\nEmail:$(formData.reply_to}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'new message from static portfolio',
      },
    },
  };
  SES.sendEmail(emailParams, callback);
}
module.exports.staticSiteMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body);
  sendEmail(formData, function(err, data) {
    const response = {
      statusCode: err ? 500: 200,
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/',
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };

    callback(null, response);
  });
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

