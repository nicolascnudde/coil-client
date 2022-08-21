import { About, FAQ } from "../components/About";
import { Image } from "../components/Image";
import { BaseLayout } from "../layouts";

const AboutPage = ({ cart }) => {
  return (
    <BaseLayout cart={cart}>
      <About />

      <Image image="farmers-about.jpg" text="about us farm" />

      <FAQ />
    </BaseLayout>
  );
};

export default AboutPage;
