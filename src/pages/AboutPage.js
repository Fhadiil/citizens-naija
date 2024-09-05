import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 50px;
  max-width: 1000px;
  margin: 0 auto;
`;

const AboutSection = styled.section`
  margin-bottom: 50px;
  text-align: left;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const AboutDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamImage = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
`;

const AboutPage = () => (
  <AboutContainer>
    <AboutSection>
      <AboutTitle>Our Mission</AboutTitle>
      <AboutDescription>
        Citizen's Naija was created with the vision of empowering citizens to
        take control of their community's future. Our goal is to provide a
        platform where everyday issues can be reported, discussed, and resolved.
        We believe that by giving people a voice, we can create safer, cleaner,
        and more transparent communities.
      </AboutDescription>
    </AboutSection>

    <AboutSection>
      <AboutTitle>Meet the Team</AboutTitle>
      <TeamContainer>
        <TeamMember>
          <TeamImage src="/images/team-member-1.jpg" alt="Team Member 1" />
          <TeamName>Muhammad Katagum Aliyu</TeamName>
        </TeamMember>
        <TeamMember>
          <TeamImage src="/images/team-member-2.jpg" alt="Team Member 2" />
          <TeamName>Zakariyau Haruna Babatunde</TeamName>
        </TeamMember>
        <TeamMember>
          <TeamImage src="/images/team-member-3.jpg" alt="Team Member 3" />
          <TeamName>Hauwa'u Sani Abubakar</TeamName>
        </TeamMember>
      </TeamContainer>
    </AboutSection>
  </AboutContainer>
);

export default AboutPage;
