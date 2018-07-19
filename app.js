
let express = require('express');
let app = express();
/*  Install: npm install twillio --save 
    Download the helper library from https://www.twilio.com/docs/node/install
    Your Account Sid and Auth Token from twilio.com/console 
*/
const TWILIO_ACCOUNT_SID = 'AC1b7XXXXXXXXXXXXXXXXXXXXXXXX490906';
const TWILIO_AUTH_TOKEN = '38d1XXXXXXXXXXXXXXXXXXXXXXXXXXXXff2c0';
const TWILIO_PHONE_NUMBER = '+918374736430';
const CELL_PHONE_NUMBER = '+173XXXXXXX78';

let twilios = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

twilios.calls
    .create({
        url: 'http://demo.twilio.com/docs/voice.xml',  // (or),body: "You just sent an SMS from Node.js using Twilio!"
        to: TWILIO_PHONE_NUMBER,
        from: CELL_PHONE_NUMBER
    }) // }).then((messsage) => console.log(message.sid)); or else to place call instead message
    .then(call => console.log(call.sid))
    .done();

let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Sample Twillio API Server is listening at http://%s:%s', host, port);
});
/**####SURYA*/