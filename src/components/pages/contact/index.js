import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const Page = styled.section`
  width: 100vw;
`;
const PageTitle = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 2em;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  max-width: 22em;
  margin: auto;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.7em 0;
  outline: none;
  font-size: 1.2em;
  border: solid black;
  text-indent: 1em;
  margin-bottom: 1em;
  // background: grey;
  // color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 12em;
  border: solid black;
  padding: 1.25em 0;
  font-size: inherit;
  resize: none;
  text-indent: 1em;
  margin-bottom: 1em;
`;

const Button = styled.button`
  width: 8em;
  padding: 0.2em;
  margin-top: 0.8em;
  border: solid white 2px;
  background: transparent;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  :hover {
    background: #79cadc;
    transition: 1s;
  }
`;

const MessageContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid black 0.5em;
  width: 20em;
  padding: 1em;
`;
const Title = styled.h1`
  margin-top: 0;
`;

const ContactPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [sent, setSent] = React.useState(null);
  //
  const handleSubmit = e => {
    e.preventDefault();
    fetch(`.netlify/functions/email`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        phone,
        message
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => console.log('this is true ? : ', res.success))
      .then(setSent(true))
      .catch(err => {
        setSent(false);
        console.log(err);
      });
  };

  return (
    <Page>
      <PageTitle>Get in Touch...</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputField
          type="text"
          onChange={event => setName(event.target.value)}
          placeholder="Your name *"
          id="name"
          pattern="^[a-zA-Z\ \']{0,30}$"
          name="name"
          required
        />
        <InputField
          type="email"
          onChange={event => setEmail(event.target.value)}
          placeholder="Your email *"
          id="email"
          name="email"
          pattern="[-.\w]+@([\w-]+\.)+[\w-]{2,20}"
          required
        />
        <InputField
          type="text"
          onChange={event => setPhone(event.target.value)}
          placeholder="Your phone *"
          name="phone"
          required
        />
        <TextArea
          cols="30"
          onChange={event => setMessage(event.target.value)}
          rows="10"
          placeholder="Your message..."
          name="message"
          required
        />
        {sent === true ? <Redirect to="contact/success" /> : null}

        {sent === false ? (
          <MessageContainer>
            <Title>Failed to send message.</Title>
            <p>Oops, something went wrong. Please try again</p>
          </MessageContainer>
        ) : null}

        <Button>Send Message</Button>
      </Form>
    </Page>
  );
};
export default ContactPage;
