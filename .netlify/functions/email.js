const sendmail = require('sendmail')();

exports.handler = (event, context, callback) => {
  sendmail(
    {
      from: 'burhan_1990@hotmail.co.uk',
      to: 'burhan_1990@hotmail.co.uk',
      subject: 'test sendmail',
      html: 'Mail of test sendmail '
    },
    function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    }
  );
};
