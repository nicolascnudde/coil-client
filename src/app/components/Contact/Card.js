import React from 'react'
import questionMark from '../../images/question-mark.svg';
import styled from "styled-components";
import Button from '../Button/Button'

const StyledArticle = styled.article`
  margin:  ${({ theme }) => theme.margins.normal};  
  padding:  ${({ theme }) => theme.margins.normal};  
  text-align: center;
  width: 22rem;
  max-width: 100%;

  border-radius:  ${({ theme }) => theme.borderRadius.medium};
  background-color:  ${({ theme }) => theme.colors.lightGreen};


  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

h2 {
  flex-basis: 100%;
  margin: ${({ theme }) => theme.margins.small} 0;
}

p{
  flex-basis:100%;
  margin:  ${({ theme }) => theme.margins.extraSmall} 0;
}

button {
  margin:  ${({ theme }) => theme.margins.normal} 0;
  padding: ${({ theme }) => theme.margins.extraSmall} ${({ theme }) => theme.margins.medium};
}

`;

const StyledImg = styled.img`
  width: 4rem;
`;

const card = ({questionTitle, questions}) => {
  return (
    <StyledArticle>
      <StyledImg src={questionMark} />
      <h2>{questionTitle}</h2>
      {questions && questions.map(question => <p>{question}</p>)}
      <Button color="primary">{questionTitle}</Button>
    </StyledArticle>
  )
}

export default card
