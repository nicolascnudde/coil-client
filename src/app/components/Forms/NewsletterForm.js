import React from "react";
import { Formik } from "formik";
import Button from "../Button/Button";
import * as yup from "yup";
import InputField from "../Forms/InputField";
import styled from "styled-components";

const NewsletterContainer = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.margins.normal};
  margin: 0 auto;

  input {
    margin: 0 auto;
    margin-top: ${({ theme }) => theme.margins.normal};
    width: 100%;

    @media (min-width: ${({ theme }) => theme.width.tablet}) {
      margin-top: 0;
    }
  }

  p {
    width: 85%;
    margin: 0 auto;
  }

  button {
    margin-top: ${({ theme }) => theme.margins.small};
    width: 100%;
  }
`;

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid Email")
    .max(128)
    .required("Email is required"),
});

const NewsletterForm = () => {
  return (
    <NewsletterContainer>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting, handleBlur, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <InputField name="email" placeholder="Email" />

            <Button disabled={isSubmitting} type="submit">
              Sign me up!
            </Button>
          </form>
        )}
      </Formik>
    </NewsletterContainer>
  );
};

export default NewsletterForm;
