import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background: url("/path-to-hero-image.jpg") no-repeat center center/cover;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
`;

const HeroButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #ff6347;
  border: none;
  border-radius: 5px;
  color: white;
`;

const Hero = () => (
  <HeroSection>
    <HeroTitle>Empowering Communities</HeroTitle>
    <HeroButton>Report an Issue</HeroButton>
  </HeroSection>
);

export default Hero;
