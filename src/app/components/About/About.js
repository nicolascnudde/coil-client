import React from "react";
import styled from "styled-components";

import { Wrapper } from "../../theme/style";
import theme from "../../contexts/Theme";

const StyledSection = styled.section`
  margin-bottom: ${theme.margins.large};
`;
const StyledTitle = styled.h1``;
const StyledText = styled.p``;

const About = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledTitle>We are Farmers Without Borders.</StyledTitle>

        <StyledText>
          Our goal is to connect small local farmers and producers to urban
          communities by providing a fresh and local alternative to big chain
          grocery outlets. We have a wide selection of local produce that is
          delivered right to your doorstep. There's no longer a barrier to good
          and healthy food. We believe that organic and local produce is for
          everyone. You deserve to eat better.
        </StyledText>
      </Wrapper>
    </StyledSection>
  );
};

export default About;
