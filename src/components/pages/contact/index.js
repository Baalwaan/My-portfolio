import React from 'react';
import styled from 'styled-components';

const Page = styled.section`
  width: 80vw;
  margin: auto;
`;
const PageTitle = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 2em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
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
  }
`;

const ContactPage = () => (
  <Page>
    <PageTitle>Get in Touch...</PageTitle>
    <Form>
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
    </Form>
  </Page>
);

export default ContactPage;
