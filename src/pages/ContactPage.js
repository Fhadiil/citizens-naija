import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ContactPage = () => (
  <ContactContainer>
    <h2>Contact Us</h2>
    <p>Get in touch with us for any inquiries or feedback.</p>
    {/* Add a contact form */}
  </ContactContainer>
);

export default ContactPage;
