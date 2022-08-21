import React from "react";
import { useLocation } from "react-router-dom";

import { BaseLayout } from "../layouts";
import Product from "../components/Products/Product";
import { Wrapper } from "../theme/style";
import { Search } from "../components/Search";

const ProductPage = ({ cart, setCart }) => {
  /**
   * Search for the url params
   */
  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  let query = useQuery();
  const prodId = query.get("id");

  /**
   * Render the return
   */
  return (
    <BaseLayout cart={cart}>
      <Search />

      <Wrapper>
        <Product cart={cart} setCart={setCart} prodId={prodId} />
      </Wrapper>
    </BaseLayout>
  );
};

export default ProductPage;
