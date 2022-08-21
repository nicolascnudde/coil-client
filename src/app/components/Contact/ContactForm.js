import { Formik } from 'formik';
import React from 'react'
import styled from "styled-components";
import * as yup from 'yup';
import Button from '../Button/Button';
import InputField from '../Forms/InputField';


const StyledSelect = styled.select`
display: block;
border: none;
border-radius:  ${({ theme }) => theme.borderRadius.small};
background-color:  ${({ theme }) => theme.colors.primaryGreen};
color:  ${({ theme }) => theme.colors.white};
padding:  ${({ theme }) => theme.margins.extraSmall};  
`

const StyledForm = styled.form`
background-color:  ${({ theme }) => theme.colors.lightGreen};
border-radius:  ${({ theme }) => theme.borderRadius.medium};
padding: ${({ theme }) => theme.margins.normal};
width: auto;
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;

label {
  flex-basis: 100%;
}
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.margins.extraSmall};  
`;

const StyledTextarea = styled.textarea`
  display: block;
  margin-top: ${({ theme }) => theme.margins.extraSmall}; 
  background-color:  ${({ theme }) => theme.colors.white};
  border-radius:  ${({ theme }) => theme.borderRadius.small};
   border: none;
  padding: ${({ theme }) => theme.margins.extraSmall} ${({ theme }) => theme.margins.small};

`;

const ContactForm = () => {
  const validationSchema = yup.object({
    firstname: yup.string().max(128).required('Firstname is required'),
    name: yup.string().max(128).required('Name is required'),
    email: yup.string().email('Enter a valid Email').max(128).required('Email is required'),
    phone: yup.number().max(128),
    subject: yup.string().max(128).required('Subject is required'),
    content: yup.string().max(512).required('Content is required'),
  })
  return (
    <Formik
      initialValues={{
        firstname : '',
        name : '',
        email : '',
        phone : '',
        subject : '',
        content : ''
      }}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledLabel>
            Firstname
            <InputField name="firstname" type="text" placeholder="Your firstname"/>
          </StyledLabel>
          <StyledLabel>
            Name
            <InputField name="name" type="text" placeholder="Your name" />
          </StyledLabel>
          <StyledLabel>
            Email
            <InputField name="email" type="text" placeholder="my@email.com" />
          </StyledLabel>
          <StyledLabel>
            Phone
            <InputField name="phone" type="text" placeholder="+32412346" />
          </StyledLabel>
          <StyledLabel>
            Subject
            <StyledSelect name="subject">
              <option value="orders" selected>Orders</option>
              <option value="delivery">Delivery</option>
              <option value="refund">Refund</option>
              <option value="directContact">Direct Contact</option>
            </StyledSelect>
          </StyledLabel>
          <StyledLabel>
            Content
            <StyledTextarea name="content" rows="6" placeholder="Please write your content here..." />
          </StyledLabel>

          <Button 
          type="submit" 
          color="primary"
        >
          Send!
        </Button>
        </StyledForm>
      )}
      
    </Formik>
  )
}

export default ContactForm
