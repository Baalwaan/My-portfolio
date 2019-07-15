import React from 'react';
import styled from 'styled-components';

const Page = styled.section`
  width: 80vw;
  margin: auto;
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

const InputContainer = styled.div`
  margin: 1em 0;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1em 0;
  outline: none;
  font-size: 1.2em;
  border: solid black;
  text-indent: 1em;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 12em;
  border: solid black;
  padding: 1.25em 0;
  font-size: inherit;
  resize: none;
`;

const ContactPage = () => (
  <Page>
    <Form>
      Contact page
      <InputContainer>
        <InputField />
      </InputContainer>
      <InputContainer>
        <InputField />
      </InputContainer>
      <InputContainer>
        <InputField />
      </InputContainer>
      <InputContainer>
        <TextArea />
      </InputContainer>
    </Form>
  </Page>
);

export default ContactPage;
