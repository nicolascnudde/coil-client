import React from "react";
import { useLocation } from "react-router-dom";

import { BaseLayout } from "../layouts";
import Farmer from "../components/Farmer/Farmer";
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
  const farmerId = query.get("id");

  /**
   * Render the return
   */
  return (
    <BaseLayout cart={cart}>
      <Search />

      <Wrapper>
        <Farmer cart={cart} setCart={setCart} farmerId={farmerId} />
      </Wrapper>
    </BaseLayout>
  );
};

export default ProductPage;
