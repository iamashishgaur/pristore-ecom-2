import React, { useEffect } from "react";

import Layout from "../components/layout/Layout";
import { Button } from "../styles/commanStyle";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
import Cartitem from "../components/CartItem";
import { HiArrowLeft } from "react-icons/hi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
// import { Buttonwrapper } from "../styles/ProductDetailsStyle";
import { CartTitle } from "../styles/commanStyle";
import {
  CartPageContainer,
  BackToShop,
  Buttonwrapper,
  CartContainer,
  CartItemsWrapper,
  CartLeft,
  CartRight,
  DeliveryChargesInfo,
  TotalSummaryContainer,
  EmptyCart,
  EmptyIMG,
  CheckOutButton,
  ItemPrice,
  ItemPriceInfo,
  ItemTitle,
  BackToShops,
  SummaryTitle,
  CheckOutButtons,
  DiscountPriceInfo,
  DiscountPrice,
  SavePriceInfo,
  DeliveryInfo,
  TotalPriceInfo,
  TotalPrice,
} from "../styles/CartStyle";

const CartScreen = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const productId = id;
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const placeorder = () => {
    // nav("/login?redirect=/shipping");
    nav("/shipping");
  };
  return (
    <>
      <CartPageContainer>
        <Layout>
          <CartTitle>My Cart</CartTitle>
          {cartItems.length === 0 ? (
            <EmptyCart>
              <EmptyIMG>
                <img src="/images/cart-empty.png" alt="Empty Cart" />
              </EmptyIMG>
              <h2>Your Cart is Empty</h2>
              <BackToShop
                onClick={() => {
                  nav("/");
                }}
              >
                <HiArrowLeft />
                Back To Shopping
              </BackToShop>
            </EmptyCart>
          ) : (
            <CartContainer>
              <CartLeft>
                <SummaryTitle>Cart items</SummaryTitle>
                {cartItems.map((item) => (
                  <CartItemsWrapper key={item._id}>
                    <Cartitem item={item} />
                  </CartItemsWrapper>
                ))}
                <hr></hr>
                <Buttonwrapper>
                  <BackToShops
                    onClick={() => {
                      nav("/");
                    }}
                  >
                    <BsArrowLeftShort />
                    Continue Shopping
                  </BackToShops>
                  <CheckOutButtons
                    disabled={cartItems.length === 0}
                    onClick={placeorder}
                  >
                    Checkout
                    <BsArrowRightShort />
                  </CheckOutButtons>
                </Buttonwrapper>
              </CartLeft>
              <CartRight>
                <SummaryTitle>PRICE DETAILS</SummaryTitle>
                <hr></hr>
                <TotalSummaryContainer>
                  <ItemPriceInfo>
                    <ItemTitle>
                      Price (
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      items) :
                    </ItemTitle>
                    <ItemPrice>
                      <span>
                        ₹
                        {cartItems
                          .reduce((acc, item) => acc + item.qty * item.price, 0)
                          .toFixed(2)}
                      </span>
                    </ItemPrice>
                  </ItemPriceInfo>
                  <DiscountPriceInfo>
                    <ItemTitle>Discount</ItemTitle>
                    <DiscountPrice>
                      <span>
                        ₹
                        {cartItems
                          .reduce((acc, item) => acc + item.qty * item.price, 0)
                          .toFixed(2)}
                      </span>
                    </DiscountPrice>
                  </DiscountPriceInfo>
                  <DeliveryChargesInfo>
                    <ItemTitle>Delivery Charges</ItemTitle>
                    <DeliveryInfo>free</DeliveryInfo>
                  </DeliveryChargesInfo>
                  <hr></hr>
                  <TotalPriceInfo>
                    <ItemTitle>Total Amount</ItemTitle>
                    <TotalPrice>
                      <span>
                        ₹{" "}
                        {cartItems
                          .reduce((acc, item) => acc + item.qty * item.price, 0)
                          .toFixed(2)}
                      </span>
                    </TotalPrice>
                  </TotalPriceInfo>
                  <hr></hr>
                  <SavePriceInfo>
                    {`You will save ₹(${12001}) on This order`}
                  </SavePriceInfo>
                </TotalSummaryContainer>
                <CheckOutButton
                  disabled={cartItems.length === 0}
                  onClick={placeorder}
                >
                  Place Order
                </CheckOutButton>
              </CartRight>
            </CartContainer>
          )}
        </Layout>
      </CartPageContainer>
    </>
  );
};

export default CartScreen;
