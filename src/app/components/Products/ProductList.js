import { useQuery } from "@apollo/client";
import styled from "styled-components";

import ProductListItem from "./ProductListItem";
import {
  GET_ALL_PRODUCTS,
  GET_SEARCHED_PRODUCTS,
} from "../../graphql/products";
import { GET_CATEGORY_PRODUCTS } from "../../graphql/categories";
import theme from "../../contexts/Theme";
import Spinner from "../Spinner/Spinner";

const StyledList = styled.ul`
  margin-top: ${theme.margins.small};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductList = ({ catId, cart, featured, searchQuery, setCart }) => {
  // Parse the category Id to an integer
  const id = parseInt(catId);
  // WIP: Search query capital issue
  // const capitalSearchQuery = searchQuery ? CapitalCase(searchQuery) : null;

  // Query for searching product(s)
  const {
    data: dataSearch,
    loading: loadingSearch,
    error: errorSearch,
  } = useQuery(GET_SEARCHED_PRODUCTS, {
    variables: { searchQuery },
    skip: !searchQuery,
  });

  // Query for products per category
  const {
    data: dataCategory,
    loading: loadingCategory,
    error: errorCategory,
  } = useQuery(GET_CATEGORY_PRODUCTS, {
    variables: { id },
    skip: !id && !searchQuery,
  });

  // Query for all products
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS, {
    skip: id || searchQuery,
  });

  // While loading...
  if (loading | loadingCategory | loadingSearch)
    return <Spinner loading={loading | loadingCategory | loadingSearch} />;

  // If error...
  if (errorSearch | errorCategory | error)
    return `Couldn't load the products. Please try again.`;

  /* Cart */
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

  // All the product properties
  const productProps = (product) => {
    return (
      <ProductListItem
        key={product.id}
        id={product.id}
        name={product.name}
        description={product.description}
        image={product.image}
        price={product.price}
        farmer={product.farmer}
        product={product}
        addToCart={addToCart}
      />
    );
  };

  return (
    <>
      <h3>
        {!featured // Don't show if products are featured (on the homepage)
          ? searchQuery
            ? `${dataSearch.getSpecificProducts.length} products found with search: "${searchQuery}"`
            : id
            ? `${
                dataCategory.getCategory.products.length
              } products found in the "${dataCategory.getCategory.name.toLowerCase()}" category.`
            : `${data.products.length} products found in all categories.`
          : null}
      </h3>

      <StyledList>
        {featured // Take the first 2 products that will be "featured" on the homepage (for now)
          ? data.products.slice(0, 2).map((d) => {
              return productProps(d);
            })
          : searchQuery
          ? dataSearch.getSpecificProducts.map((d) => {
              return productProps(d);
            })
          : id
          ? dataCategory.getCategory.products.map((d) => {
              return productProps(d);
            })
          : data.products.map((d) => {
              return productProps(d);
            })}
      </StyledList>
    </>
  );
};

export default ProductList;
