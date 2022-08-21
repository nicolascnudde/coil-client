import { BaseLayout } from "../layouts";
import { Hero } from "../components/Hero";
import { Search } from "../components/Search";
import { Categories } from "../components/Category/";
import { Products } from "../components/Products/";

const HomePage = ({ cart, setCart }) => {
  return (
    <BaseLayout cart={cart}>
      <Search />

      <Hero />

      <Categories />

      <Products cart={cart} setCart={setCart} />
    </BaseLayout>
  );
};

export default HomePage;
