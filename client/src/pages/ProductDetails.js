import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsCircleFill, BsCheckCircleFill } from "react-icons/bs";
import Layout from "../components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../components/rating/Rating";
import ProductDetailsCarousel from "../components/ProductDetailsCarousel";
import { listProductDetails } from "../actions/productActions";
import Spinner from "../components/spinner/Spinner";
import { addToCart } from "../actions/cartAction";
import Message from "../components/spinner/Message";
import {
  ProductDetailsContainer,
  ProductContainer,
  ProductImage,
  ProductTitles,
  ProductInfo,
  ProductTitle,
  ProductPriceWrapper,
  ProductRating,
  ProductDiscription,
  ProductColor,
  ProductQTY,
  AddCartButton,
  Title,
  ColorWrapper,
  QTYSelection,
  DiscountPrice,
  DisCountParcentag,
  ProductPrice,
  ProductStock,
  Stock,
} from "../styles/ProductDetailsStyle";

const ProductDetails = ({ history, match }) => {
  const [qty, SteQty] = useState(1);
  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const onOptionChangeHandler = (event) => {
    SteQty(event.target.value);
  };

  const addtocartHandler = () => {
    nav(`/cart/${id}?qty=${qty}`);
    dispatch(addToCart(id, qty));
    // nav("/cart");
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <ProductDetailsContainer>
          <Layout>
            <ProductTitles>Product Details</ProductTitles>
            <ProductContainer>
              <ProductImage>
                <ProductDetailsCarousel product={product} />
              </ProductImage>
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductRating>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ProductRating>
                <hr></hr>
                <ProductPriceWrapper>
                  <DisCountParcentag>
                    -<span>{product.discountPercentage}%</span>
                  </DisCountParcentag>
                  <DiscountPrice>
                    $
                    {Math.round(
                      product.price * (1 - product.discountPercentage / 100)
                    )}
                  </DiscountPrice>
                  <br></br>
                  <ProductPrice>
                    {" "}
                    M.R.P: <span>${product.price}</span>
                  </ProductPrice>
                  <br></br>
                  <p>Inclusive of all taxes</p>
                </ProductPriceWrapper>
                <hr></hr>
                <ProductStock>
                  <Title>Product Status : </Title>
                  <Stock>
                    {product.countInStock > 0
                      ? `${product.countInStock} in Stock`
                      : `${product.countInStock} Out Of Stock`}
                  </Stock>
                </ProductStock>
                <hr></hr>
                <ProductDiscription>{product.description}</ProductDiscription>
                <hr></hr>
                <ProductColor>
                  <Title>Color: </Title>
                  <ColorWrapper>
                    <BsCheckCircleFill size={27} color="red" />
                    <BsCircleFill size={27} color="green" />
                    <BsCircleFill size={27} color="blue" />
                    <BsCircleFill size={27} color="orange" />
                  </ColorWrapper>
                </ProductColor>
                <hr></hr>

                {/* {product.countInStock > 0 && ( */}
                <ProductQTY>
                  <Title>Quantity: </Title>
                  <QTYSelection>
                    <select
                      as="select"
                      value={qty}
                      onChange={onOptionChangeHandler}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </QTYSelection>
                </ProductQTY>
                {/* )} */}

                <hr></hr>
                <AddCartButton onClick={addtocartHandler}>
                  Add To Cart
                </AddCartButton>
              </ProductInfo>
            </ProductContainer>
            {/* <RelatedProducts product="" /> */}
          </Layout>
        </ProductDetailsContainer>
      )}
    </>
  );
};

export default ProductDetails;
