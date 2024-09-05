import React from "react";
import styled from "styled-components";
// import Button from "../components/Button";

const HeroSection = styled.section`
  background: url("https://wallpapercave.com/wp/wp3438359.png") no-repeat center
    center/cover;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
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

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  max-width: 600px;
`;

const FeaturesOverview = styled.section`
  padding: 50px 20px;
  text-align: center;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const FeaturesList = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1000px;

  div {
    flex: 1;
    margin: 10px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
  }
`;

const HomePage = () => (
  <>
    <HeroSection>
      <HeroTitle>Empowering Communities to Make Their Voices Heard</HeroTitle>
      <HeroSubtitle>
        Citizen's Naija enables Nigerians to anonymously report local issues and
        collaborate with the community to resolve them. Make a difference today.
      </HeroSubtitle>
      {/* <Button>Report an Issue Now</Button> */}
      <button>Send Message</button>
    </HeroSection>

    <FeaturesOverview>
      <FeaturesTitle>Key Features</FeaturesTitle>
      <FeaturesList>
        <div>
          <h3>Anonymous Reporting</h3>
          <p>
            Report problems in your community without fear of retaliation. Stay
            anonymous, stay safe.
          </p>
        </div>
        <div>
          <h3>Community Collaboration</h3>
          <p>
            Upvote and discuss the most pressing concerns in your area to get
            them prioritized and resolved.
          </p>
        </div>
        <div>
          <h3>Issue Tracking</h3>
          <p>
            Stay informed on the progress of the issues you care about, from the
            initial report to resolution.
          </p>
        </div>
      </FeaturesList>
    </FeaturesOverview>
  </>
);

export default HomePage;
