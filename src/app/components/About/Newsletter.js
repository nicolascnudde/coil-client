import styled from "styled-components";

import { Wrapper } from "../../theme/style";
import { NewsletterForm } from "../Forms";
import theme from "../../contexts/Theme";

const NewsletterSection = styled.section`
  margin-top: ${theme.margins.large};
`;

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const TextContainer = styled.div`
  @media (min-width: 768px) {
    flex-basis: 48%;
  }
`;

const FormContainer = styled.div`
  @media (min-width: 768px) {
    flex-basis: 48%;
  }
`;

const Newsletter = () => {
  return (
    <NewsletterSection>
      <Wrapper>
        <h2>Stay in touch</h2>

        <Container>
          <TextContainer>
            <p>
              Subscribe to our newsletter to hear about the latest promotions,
              events, and announcements.
            </p>
          </TextContainer>

          <FormContainer>
            <NewsletterForm />
          </FormContainer>
        </Container>
      </Wrapper>
    </NewsletterSection>
  );
};

export default Newsletter;
