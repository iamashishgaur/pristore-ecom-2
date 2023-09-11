import React from "react";
import { Link } from "react-router-dom";
import {
  ProductBoxWrapper,
  ProductBox,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductRating,
  ProductdisPrice,
  RatingWrapper,
  Titlewrapper,
  FavouriteProduct,
} from "./ProductCardStyle";
import { TbHeart } from "react-icons/tb";
import Rating from "../rating/Rating";

const ProductCart = ({ product }) => {
  return (
    <>
      <ProductBoxWrapper>
        <ProductBox>
          <ProductImage>
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
          </ProductImage>
          <FavouriteProduct>
            <TbHeart />
          </FavouriteProduct>
          <ProductDetails>
            <Titlewrapper>
              <Link to={`/product/${product._id}`}>
                <ProductTitle>{product.name}</ProductTitle>
              </Link>
              <ProductdisPrice>
                $
                {Math.round(
                  product.price * (1 - product.discountPercentage / 100)
                )}
              </ProductdisPrice>
            </Titlewrapper>
            <RatingWrapper>
              <ProductRating>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ProductRating>
              <ProductPrice>${product.price}</ProductPrice>
            </RatingWrapper>
          </ProductDetails>
        </ProductBox>
      </ProductBoxWrapper>
    </>
  );
};

export default ProductCart;
