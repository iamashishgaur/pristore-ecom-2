import React from "react";
import {
  CategoryImage,
  CategoryItemTitle,
  CategoryItems,
} from "./categorystyle";

const CategoryItem = ({ item }) => {
  return (
    <>
      <CategoryItems>
        <CategoryImage>
          <img src={item.image} alt="" />
        </CategoryImage>
        <CategoryItemTitle>
          <span>{item.title}</span>
        </CategoryItemTitle>
      </CategoryItems>
    </>
  );
};

export default CategoryItem;
