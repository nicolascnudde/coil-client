/**
 * All Farmer related GraphQL stuff
 */

import { gql } from "@apollo/client";

/**
 * Queries
 */
export const GET_FARMERS = gql`
  query {
    farmers {
      id
      company
      firstName
      lastName
      bio
      logo
      website
      products {
        id
        name
        description
        price
        image
      }
    }
  }
`;

export const GET_FARMER = gql`
  query ($id: Int!) {
    getFarmer(id: $id) {
      id
      company
      firstName
      lastName
      bio
      logo
      website
      products {
        id
        name
        description
        price
        image
      }
    }
  }
`;
