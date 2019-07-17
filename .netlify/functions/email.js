const sendmail = require('sendmail')();

const { config } = require('dotenv');
config();

// THIS NEEDS TO BE SET TO THE EMAIL CHOSEN BY KATH (in Netlify)!!!!
const recipient = process.env.EMAIL;

exports.handler = function(event, context, callback) {
  const mailObject = {
    from: recipient,
    to: recipient,
    subject: `test`,
    html: `<h3>test</p>`
  };

  sendmail(mailObject, function(err, reply) {
    if (err) {
      callback('this is error', err);
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      });
      return;
    }
  });
};
