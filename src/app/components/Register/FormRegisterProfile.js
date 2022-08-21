// import { useEffect, useRef, useState } from 'react'
import { Formik } from "formik";
import * as yup from "yup";
import Button from "../Button/Button";
import InputField from "../Forms/InputField";
import { gql, useQuery } from "@apollo/client";
import Spinner from "../Spinner/Spinner";
// import { useMutation } from '@apollo/client';

// const UPDATE_PROFILE = gql`
// mutation UpdateProfile(
//   $id: Int!,
//   $firstName: String!,
//   $lastName: String!,
//   $profilePicture: String!,
//   $birthday: String!,
//   $street: String!,
//   $houseNumber: String!,
//   $zipCode: String!,
//   $country: String!,
//   $telephoneNumber: Float!){
//     updateProfile(
//     updateProfileInput: {
//       id: $id
//       firstName: $firstName
//       lastName: $lastName
//       profilePicture: $profilePicture
//       birthday: $birthday
//       street: $street
//       houseNumber: $houseNumber
//       zipCode: $zipCode
//       country: $country
//       telephoneNumber: $telephoneNumber}){
//     id
//     firstName
//     lastName
//     profilePicture
//     birthday
//     street
//     houseNumber
//     zipCode
//     country
//     telephoneNumber
//   }
// }
// `;

const GET_USER_BY_EMAIL = gql`
  query FindUserByEmail($email: String!) {
    findUserByEmail(email: $email) {
      id
      email
      username
      password
      profile {
        id
        firstName
        lastName
        profilePicture
        birthday
        street
        houseNumber
        zipCode
        country
        telephoneNumber
      }
    }
  }
`;

const FormRegisterProfile = () => {
  const { data, loading, error } = useQuery(GET_USER_BY_EMAIL, {
    variables: { email: "a@a.com" },
  });

  const validationSchema = yup.object({
    firstname: yup.string().max(128),
    lastname: yup.string().max(128),
    profilepicture: yup.string().max(512),
    birthday: yup.date(),
    street: yup.string().max(128),
    housnr: yup.string().max(4),
    zipcode: yup.string().max(4),
    country: yup.string().max(4),
    telnr: yup.number(),
  });

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {error && <h3>Submission error for! {error.message}</h3>}
      {data && (
        <h3>
          Succes!
        </h3>
      )}
      <Formik
        enableReinitialize
        initialValues={{
          firstName: "",
          lastName: "",
          profilePicture: "",
          birthday: "",
          street: "",
          houseNumber: "",
          zipCode: "",
          country: "",
          telephoneNumber: 0,
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values), null, 2);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InputField name="firstName" placeholder="Firstname" />
            <InputField name="lastName"  placeholder="lastName" />
            <InputField name="profilePicture"  placeholder="profilePicture" />
            <InputField type="date" name="birthday"  placeholder="birthday" />
            <InputField name="street"  placeholder="street" />
            <InputField name="houseNumber"  placeholder="houseNumber" />
            <InputField name="zipcode"  placeholder="zipcode" />
            <InputField name="country"  placeholder="country" />
            <InputField name="telephoneNumber"  placeholder="0" />

            <Button type="submit" color="primary">
              Update Profile
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormRegisterProfile;
