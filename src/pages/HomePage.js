import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";

const HomeContainer = styled.div`
  text-align: center;
`;

const HomePage = () => (
  <HomeContainer>
    <Hero />
    <section>
      <h2>How It Works</h2>
      <p>Report issues, engage with your community, and track resolutions.</p>
    </section>
  </HomeContainer>
);

export default HomePage;
