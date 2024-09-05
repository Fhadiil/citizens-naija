import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input,
  textarea {
    width: 100%;
    max-width: 500px;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    color: white;
    background-color: #ff6347;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const SocialLinks = styled.div`
  margin-top: 20px;

  a {
    margin: 0 15px;
    font-size: 1.5rem;
    color: #ff6347;
    text-decoration: none;
  }
`;

const ContactPage = () => (
  <ContactContainer>
    <ContactTitle>Contact Us</ContactTitle>

    <ContactForm>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea rows="5" placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </ContactForm>

    <SocialLinks>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </SocialLinks>
  </ContactContainer>
);

export default ContactPage;
