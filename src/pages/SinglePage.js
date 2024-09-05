// src/pages/SinglePage.js

import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
// import Button from "../components/Button";

const PageContainer = styled.div`
  scroll-behavior: smooth;
`;

// Common styling for sections
const Section = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  color: ${({ color }) => color || "#000"};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

// Hero section for Home

const HeroSection = styled(Section)`
  background: url("https://wallpapercave.com/wp/wp3438359.png") no-repeat center
    center/cover;
  color: white;
  padding: 50px 20px; /* Reduce padding for smaller screens */
  a {
    padding: 10px 20px;
    font-size: 1.2rem;
    color: white;
    background-color: #ff6347;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 30px 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px 10px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  max-width: 600px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

// Features section
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

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 0.9rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    align-items: center;
  }
`;

// Contact form
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

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-width: 400px;
      font-size: 0.9rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-width: 300px;
      font-size: 0.8rem;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 1.2rem;
    color: white;
    background-color: #ff6347;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.9rem;
    }
  }
`;

const SinglePage = () => (
  <PageContainer>
    {/* Home Section */}
    <HeroSection id="home">
      <HeroTitle>Empowering Communities to Make Their Voices Heard</HeroTitle>
      <HeroSubtitle>
        Citizen's Naija enables Nigerians to anonymously report local issues and
        collaborate with the community to resolve them. Make a difference today.
      </HeroSubtitle>
      <a href="/report">Report an Issue Now</a>
    </HeroSection>

    {/* Features Section */}
    <Section id="features" bgColor="#f4f4f4">
      <SectionTitle>Key Features</SectionTitle>
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
    </Section>

    {/* About Section */}
    <Section id="about" bgColor="#fff">
      <SectionTitle>About Citizen's Naija</SectionTitle>
      <p>
        Citizen's Naija was created to empower everyday people to take control
        of their communities. Our platform helps citizens anonymously report
        issues like unsafe infrastructure, sanitation problems, and more. By
        fostering a community-driven approach, we ensure that local concerns are
        addressed efficiently and transparently.
      </p>
    </Section>

    {/* Contact Section */}
    <Section id="contact" bgColor="#f4f4f4">
      <SectionTitle>Contact Us</SectionTitle>
      <ContactForm>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </ContactForm>
    </Section>
  </PageContainer>
);

export default SinglePage;
