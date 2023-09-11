import React, { useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/spinner/Message";
import CheckoutStep from "../components/CheckoutStep";
import Steps from "../components/Steps";
import Layout from "../components/layout/Layout";
import { CartTitle } from "../styles/commanStyle";
import { styled } from "styled-components";
const PlaceOrderScreenContainer = styled.div`
  width: 100%;
  height: auto;
  border: 2px solid red;
`;
const OrderScreenContainer = styled.div`
  width: 100%;
  height: auto;
  border: 2px solid blue;
  padding: 2rem 5rem;
  margin-bottom: 20px;
`;

const PlaceOrderScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;
  const nav = useNavigate();
  //fun for decimal
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimal(cart.cartItems > 500 ? 0 : 50);
  cart.taxPrice = addDecimal(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const placeorderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  useEffect(() => {
    if (success) {
      nav(`/order/${order._id}`);
    }
    //eslint-disable-next-line
  }, [history, success]);
  return (
    <>
      <PlaceOrderScreenContainer>
        <Layout>
          <CartTitle>
            <CheckoutStep step1 step2 step3 step4 />
          </CartTitle>
          <OrderScreenContainer>
            <Row>
              <Col md={8}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>Shipping Address</h2>
                    <div>
                      <div>
                        <strong>{cart.shippingAddress.name}</strong>&nbsp;
                        <strong>{cart.shippingAddress.number}</strong>
                      </div>
                      <div>
                        {cart.shippingAddress.housenumber}&nbsp;
                        {cart.shippingAddress.address}&nbsp;
                        {cart.shippingAddress.city}&nbsp;
                        {cart.shippingAddress.state}&nbsp;
                        {cart.shippingAddress.pincode}&nbsp;
                        {cart.shippingAddress.country}&nbsp;
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <p>
                      <strong>{cart.paymentMethod}</strong>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2>Order Items</h2>
                    {cart.cartItems.length === 0 ? (
                      <span>Your Cart is Empty</span>
                    ) : (
                      <ListGroup variant="flush">
                        {cart.cartItems.map((item, index) => (
                          <ListGroup.Item key={index}>
                            <Row>
                              <Col md={1}>
                                <Image src={item.image} alt={item.name} fluid />
                              </Col>
                              <Col>
                                <Link to={`/product/${item.product}`}>
                                  {item.name}
                                </Link>
                              </Col>
                              <Col md={4}>
                                {item.qty} X ${item.price} = ${item.price}
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={4}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h2>Price Details</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Items</Col>
                        <Col>${cart.itemsPrice}</Col>
                      </Row>
                      <Row>
                        <Col>Shipping</Col>
                        <Col>${cart.shippingPrice}</Col>
                      </Row>
                      <Row>
                        <Col>Tax</Col>
                        <Col>${cart.taxPrice}</Col>
                      </Row>
                      <Row>
                        <Col>Total</Col>
                        <Col>${cart.totalPrice}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {error && <span variant="danger">{error}</span>}
                    </ListGroup.Item>
                    <Button
                      type="button"
                      className="btn-block"
                      disabled={cart.cartItems === 0}
                      onClick={placeorderHandler}
                    >
                      Continue
                    </Button>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </OrderScreenContainer>
        </Layout>
      </PlaceOrderScreenContainer>
    </>
  );
};

export default PlaceOrderScreen;
