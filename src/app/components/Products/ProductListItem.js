import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../contexts/Theme";
import * as Routes from "../../routes";
import { FiShoppingCart } from "react-icons/fi";
// import { useState } from "react";

const StyledItem = styled.li`
  flex-basis: 48%;
  position: relative;
  margin-top: ${theme.margins.small};
  background: ${theme.colors.lightGreen};
  padding: 1rem;
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  @media (min-width: 1024px) {
    flex-basis: 20%;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  @media (min-width: 1024px) {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
  }
`;

const ProductLink = styled(Link)`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;

    @media (min-width: 1024px) {
      justify-content: flex-start;
    }
  }
`;

const ProductTitle = styled.h3`
  margin-top: ${({ theme }) => theme.margins.small};

  @media (min-width: 1024px) {
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    margin-left: 1rem;
  }
`;

const ProductFarmer = styled.p`
  margin-top: ${({ theme }) => theme.margins.extraSmall};
  font-size: ${({ theme }) => theme.fontSizes.small};

  @media (min-width: 1024px) {
    position: absolute;
    left: 11rem;
    top: 2.5rem;
  }
`;

const ProductPrice = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (min-width: 1024px) {
    position: absolute;
    left: 11rem;
    bottom: 1rem;
  }
`;

const CenteredText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  @media (min-width: 1024px) {
    text-align: left;
    flex-basis: 66%;
  }
`;

const ProductButton = styled.button`
  background: ${({ theme }) => theme.colors.primaryGreen};
  cursor: pointer;
  border: none;
  transition: ${({ theme }) => theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  margin-top: ${({ theme }) => theme.margins.extraSmall};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  svg,
  a {
    color: ${({ theme }) => theme.colors.white};
  }

  :hover {
    background: ${({ theme }) => theme.colors.darkGreen};
  }

  @media (min-width: 1024px) {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: ${({ theme }) => theme.margins.extraSmall};

  @media (min-width: 768px) {
    margin-top: auto;
  }
`;

const ProductListItem = ({
  id,
  name,
  image,
  price,
  farmer,
  product,
  addToCart,
}) => {
  return (
    <StyledItem key={id}>
      <CenteredText>
        <ProductLink to={`${Routes.PRODUCT}?id=${id}`}>
          <ImageContainer>
            <StyledImg src="/images/product_placeholder.jpg" alt="" />
          </ImageContainer>

          <ProductTitle>{name}</ProductTitle>
        </ProductLink>

        <ProductFarmer>{farmer.company}</ProductFarmer>

        <ProductContainer>
          <ProductPrice>€ {price}</ProductPrice>

          <ProductButton onClick={() => addToCart(product)}>
            <FiShoppingCart />
          </ProductButton>
        </ProductContainer>
      </CenteredText>
    </StyledItem>
  );
};

export default ProductListItem;
