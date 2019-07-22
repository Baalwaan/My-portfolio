import React from 'react';
import styled from 'styled-components';

const Page = styled.section`
  width: 80vw;
  margin: auto;
`;
const PageTitle = styled.h1`
  margin: 0.5em 0 0.5em 0;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.25em;
  max-width: 25em;
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
  }
`;

const Button = styled.button`
  padding: 1.25em;
  min-width: 11em;
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  background: black;
  color: white;
`;

const ContactPage = () => {
  const handleSubmit = e => {
    e.preventDefault();
    fetch(`.netlify/functions/email`).catch(error => console.log(error));
  };

  return (
    <Page>
      <PageTitle>Get in Touch...</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Your name *"
          id="name"
          pattern="^(?=.{1,40}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$"
          name="name"
          required
        />
        <InputField
          type="email"
          placeholder="Your email *"
          id="email"
          name="email"
          pattern="[-.\w]+@([\w-]+\.)+[\w-]{2,20}"
          required
        />
        <InputField
          type="text"
          placeholder="Your phone *"
          class="form-data"
          name="phone"
          required
        />
        <TextArea
          cols="30"
          rows="10"
          placeholder="Your message..."
          name="message"
        />
        <Button>Send Message</Button>
      </Form>
    </Page>
  );
};
export default ContactPage;
