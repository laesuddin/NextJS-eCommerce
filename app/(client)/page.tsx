import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import ProductGrid from "@/components/ProductGrid";

const Home = () => {
  return (
    <Container>
      <HomeBanner />
      <ProductGrid />
      <HomeCategories />
    </Container>
  );
};

export default Home;
