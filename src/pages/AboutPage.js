import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const AboutPage = () => (
  <AboutContainer>
    <h2>About Citizen's Naija</h2>
    <p>Learn more about our mission and the team behind the app.</p>
    {/* Add team bios and mission statement */}
  </AboutContainer>
);

export default AboutPage;
