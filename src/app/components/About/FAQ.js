import styled from "styled-components";

import theme from "../../contexts/Theme";
import { Wrapper } from "../../theme/style";

const StyledSection = styled.section`
  margin-top: ${theme.margins.large};
`;

const StyledQuestion = styled.p`
  font-weight: ${theme.fontWeights.bold};
  margin-top: ${theme.margins.normal};
`;

const StyledList = styled.ul`
  list-style-type: circle;
  margin-left: ${theme.margins.small};

  > * {
    font-size: ${theme.fontSizes.normal};
  }
`;

const QA = () => {
  return (
    <StyledSection>
      <Wrapper>
        <h2>Frequently Asked Questions</h2>

        <ul>
          <li>
            <StyledQuestion>Where are you available?</StyledQuestion>

            <p>
              We are currently operating in Belgium and plan on expanding to
              Canada.
            </p>
          </li>

          <li>
            <StyledQuestion>What currency do you accept?</StyledQuestion>

            <p>At this moment we only accept euros.</p>
          </li>

          <li>
            <StyledQuestion>What are the costs?</StyledQuestion>

            <p>
              Farmers and producers set the cost of goods and we charge a small
              delivery fee to make sure you get your goods on time! Fees and
              costs vary depending on seller costs and by delivery distances,
              weather, and external circumstances.
            </p>
          </li>

          <li>
            <StyledQuestion>What do you sell?</StyledQuestion>

            <span>We offer local produce such as:</span>

            <StyledList>
              <li>Vegetables</li>

              <li>Fruit</li>

              <li>Breads</li>

              <li>Meats</li>

              <li>Dairy</li>
            </StyledList>
          </li>
        </ul>
      </Wrapper>
    </StyledSection>
  );
};

export default QA;
