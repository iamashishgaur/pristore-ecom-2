import React from "react";
import Layout from "../layout/Layout";

import {
  CategoryContainer,
  CategoryWrapper,
  CategoryTitle,
  Cleft,
  CategoryProduct,
} from "./categorystyle";
import CategoryItem from "./CategoryItem";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CategoryData } from "../../data/categoryData";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Category = ({ props }) => {
  return (
    <>
      <CategoryContainer>
        <Layout>
          <CategoryWrapper>
            <CategoryTitle>
              <Cleft>Popular Categories</Cleft>
            </CategoryTitle>
            <Carousel responsive={responsive} className="productCarousel">
              {CategoryData.map((item) => {
                return <CategoryItem item={item} />;
              })}
            </Carousel>
          </CategoryWrapper>
        </Layout>
      </CategoryContainer>
    </>
  );
};

export default Category;
