const sendmail = require('sendmail')();

require('dotenv').config();

exports.handler = (event, context, callback) => {
  const form = JSON.parse(event.body);
  console.log('this is event: ', JSON.parse(event.body));
  sendmail(
    {
      from: process.env.PORTFOLIO_EMAIL,
      to: process.env.MY_EMAIL,
      subject: 'test sendmail',
      html: `<h1>Email from potential employer</h1>
      <br><br>
      <ul>
      <li>name: ${form.name}</li>
      <li>${form.email}</li>
      <li>${form.phone}</li>
      </ul>
      <div>
      
      <h2>Message: </h2>
      <p>${form.message}</p>
      </div>`
    },
    function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    }
  );
};
