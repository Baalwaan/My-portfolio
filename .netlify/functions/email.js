const sendmail = require('sendmail')();

require('dotenv').config();

exports.handler = (event, context, callback) => {
  sendmail(
    {
      from: process.env.PORTFOLIO_EMAIL,
      to: process.env.MY_EMAIL,
      subject: 'test sendmail',
      html: 'Mail of test sendmail '
    },
    function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    }
  );
};
