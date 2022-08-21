import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

const StyledH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.darkGreen};
`;

const StyledH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.darkGreen};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.normal};
  color: ${({ theme }) => theme.colors.darkGreen};
  margin-bottom: ${({ theme }) => theme.margins.small};
`;

const PriceP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.darkGreen};
  margin-bottom: ${({ theme }) => theme.margins.small};
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primaryGreen};

  :hover {
    color: ${({ theme }) => theme.colors.darkGreen};
  }
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.red};
`;

const StyledButton = styled.button`
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
    width: 20%;
  }
`;

const ContentDiv = styled.div`
  @media (min-width: 1024px) {
    flex-basis: 40%;
  }
`;

const FlexDiv = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

const PriceDiv = styled.div`
  margin-top: ${({ theme }) => theme.margins.normal};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Figure = styled.figure`
  @media (min-width: 1024px) {
    flex-basis: 40%;
  }
`;

const Img = styled.img`
  height: 450px;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  margin-bottom: ${({ theme }) => theme.margins.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const ReviewsSection = styled.section``;

const ProductItem = ({ product, cart, setCart }) => {
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <div>
      <FlexDiv>
        <Figure>
          <Img src="../images/product_placeholder.jpg" alt={product.name} />
        </Figure>
        <ContentDiv>
          <StyledH2>
            {product.name} - <StyledSpan>2kg</StyledSpan>
          </StyledH2>
          <StyledP>{product.description}</StyledP>
          <StyledH3>
            {product.farmer.lastName} - {product.farmer.firstName}
          </StyledH3>
          <StyledLink to={"farmer?id=" + product.farmer.id}>
            Learn more about this farmer
          </StyledLink>
          <PriceDiv>
            <PriceP>€ {product.price}</PriceP>
            <StyledButton onClick={() => addToCart(product)}>
              <FiShoppingCart />
            </StyledButton>
          </PriceDiv>
          <ReviewsSection>
            {product.reviews.map((r) => {
              return (
                <>
                  <span>{r.rating} stars</span>

                  <p>{r.text}</p>
                </>
              );
            })}
          </ReviewsSection>
        </ContentDiv>
      </FlexDiv>
    </div>
  );
};

export default ProductItem;
