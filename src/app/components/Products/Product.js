import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";

import { GET_PRODUCT } from "../../graphql/products";
import ProductItem from "./ProductItem";
import * as Routes from "../../routes";
import Spinner from "../Spinner/Spinner";

const Product = ({ prodId, cart, setCart }) => {
  const id = parseInt(prodId);

  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {error && <Redirect to={Routes.PRODUCTS} />}
      {data && (
        <ProductItem cart={cart} setCart={setCart} product={data.getProduct} />
      )}
    </>
  );
};

export default Product;
