import React from "react";
import styled from "styled-components";

const FeaturesContainer = styled.div`
  padding: 50px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const FeatureSection = styled.section`
  margin-bottom: 50px;
  text-align: left;
`;

const FeatureTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const FeatureImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const FeatureDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const FeaturesPage = () => (
  <FeaturesContainer>
    <FeatureSection>
      <FeatureTitle>Anonymous Reporting</FeatureTitle>
      <FeatureImage
        src="/images/anonymous-reporting.jpg"
        alt="Anonymous reporting"
      />
      <FeatureDescription>
        We prioritize your safety by enabling you to report issues anonymously.
        Report problems in your neighborhood without revealing your identity, so
        you can contribute to community improvements without fear of
        retaliation.
      </FeatureDescription>
    </FeatureSection>

    <FeatureSection>
      <FeatureTitle>Community Collaboration</FeatureTitle>
      <FeatureImage
        src="/images/community-collaboration.jpg"
        alt="Community collaboration"
      />
      <FeatureDescription>
        Collaborate with other citizens in your area to ensure important issues
        are prioritized. By upvoting and discussing reported problems, the
        community can drive the agenda and demand accountability.
      </FeatureDescription>
    </FeatureSection>

    <FeatureSection>
      <FeatureTitle>Track Issue Status</FeatureTitle>
      <FeatureImage src="/images/issue-tracking.jpg" alt="Issue tracking" />
      <FeatureDescription>
        Stay updated on the progress of the issues you've reported or followed.
        Know when local authorities or organizations are working to address
        concerns and track the progress until the issue is resolved.
      </FeatureDescription>
    </FeatureSection>
  </FeaturesContainer>
);

export default FeaturesPage;
