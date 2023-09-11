import React from "react";
import styled from "styled-components";
// import Slider from "../components/slider/Slider";
import ProductCarts from "../components/productCard/ProductCarts";
import HeroBanner from "../components/herobanner/HeroBanner";
import Category from "../components/categories/Category";
const HomeContainer = styled.div`
  width: 100%;
`;
const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <HeroBanner />
        <Category />
        {/* <Slider /> */}
        <ProductCarts />
      </HomeContainer>
    </>
  );
};

export default HomePage;
