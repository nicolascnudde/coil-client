import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Image } from "../Image";

const StyledSubTitle = styled.h2`
  margin-top: 2rem;
`;

const BioContainer = styled.div`
  margin: 1.5rem 0;
  display: flex;
`;

const StyledLogo = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 10px;
`;

const StyledBio = styled.p`
  margin-left: 1rem;
  font-style: italic;
`;

const StyledWeight = styled.span`
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: underline;
`;

const FarmerItem = ({ farmer }) => {
  return (
    <>
      <section>
        <h1>{farmer.company}</h1>

        <div>
          <Image image="farmer-detail.jpg" text="about us farm" />
        </div>

        <StyledSubTitle>About {farmer.firstName}</StyledSubTitle>

        <div>
          <p>
            Howdy! I'm{" "}
            <StyledWeight>
              {farmer.firstName} {farmer.lastName}
            </StyledWeight>{" "}
            and here is a short description about me and my farm:
          </p>

          <BioContainer>
            <StyledLogo src="../images/farmer-logo.jpg" alt="farmer logo" />

            <StyledBio>"{farmer.bio}"</StyledBio>
          </BioContainer>

          <StyledSubTitle>Website</StyledSubTitle>

          <p>You can visit and learn more about us at: </p>

          <StyledLink
            to={{ pathname: farmer.website }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {farmer.website}
          </StyledLink>
        </div>
      </section>
    </>
  );
};

export default FarmerItem;
