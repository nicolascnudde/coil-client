import Card from "../components/Contact/Card";
import { BaseLayout } from "../layouts";
import styled from "styled-components";
import ContactForm from "../components/Contact/ContactForm";

const StyledH2 = styled.h2`
  margin: ${({ theme }) => theme.margins.normal};
`

const StyledCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const StyledContactForm = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 25rem;
  max-width: 100%;
  margin: ${({ theme }) => theme.margins.normal};
`;

const ContactPage = ({ cart }) => {
  const cardContents = [
    {
      questionTitle: "Orders",
      questions: ["How can I find my order", "Can I change my order", "When do I receive my order", "How do I pay for my order"]
    },
    {
      questionTitle: "Delivery",
      questions: ["How to track your delivery", "Delivery to companies", "How to locate delivery driver", "Estimated time for delivery"]
    },
    {
      questionTitle: "Refund",
      questions: ["My package is damaged", "I never received my order", "The delivery never happened", "My package was lost"]
    },
  {
    questionTitle: "Direct Contact",
    questions: ["I want to ask something else", "I have an emergency","My order is lost"]
  }
  ]

  return (
    <BaseLayout cart={cart}>
      <h1>Contact page</h1>
      <StyledCards>
        {cardContents && cardContents.map(cardContent => <Card questionTitle={cardContent.questionTitle} questions={cardContent.questions} />)}
      </StyledCards>
      <StyledH2>Contact us!</StyledH2>
      <StyledContactForm>
        <ContactForm />
      </StyledContactForm>
    </BaseLayout>
  );
};

export default ContactPage;
