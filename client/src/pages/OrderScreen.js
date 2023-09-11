import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { ORDER_PAY_RESET } from "../constants/orderConstant";
import { getOrderDetails, payOrder } from "../actions/orderAction";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import span from "../components/shared/span";
import Spinner from "../components/spinner/Spinner";

import Layout from "../components/layout/Layout";
import {
  OrderScreenContainer,
  OrderAddress,
  OrderContainer,
  AddressName,
  OrderItems,
  HeaderTitle,
  OrderImage,
  OrderPrice,
  OrderInfo,
  PhoneNumber,
  OrderTitleName,
  UserTitle,
} from "../styles/OrderScreenStyle";

const OrderScreen = ({ match }) => {
  const { id } = useParams();
  const orderId = id;
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successpay } = orderPay;
  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
    // nav("/admin");
  };

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get(
        "http://localhost:3200/api/config/paypal"
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successpay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, order, successpay]);

  return (
    <>
      <OrderScreenContainer>
        <Layout>
          <span>id: {order?._id}</span>
          <OrderContainer>
            {loading ? (
              <Spinner />
            ) : error ? (
              <span variant="danger">{error}</span>
            ) : (
              <>
                <Row>
                  <Col md={8}>
                    <ListGroup.Item variant="flush">
                      <HeaderTitle>Delivery Address</HeaderTitle>
                      <UserTitle> {order.user.name}</UserTitle>
                      <AddressName>
                        {order.shippingAddress.housnumber}&nbsp;
                        {order.shippingAddress.address}&nbsp;
                        {order.shippingAddress.city}&nbsp;
                        {order.shippingAddress.pincode}&nbsp;
                        {order.shippingAddress.country}&nbsp;
                      </AddressName>

                      {order.isDeliverd ? (
                        <span variant="success">
                          Paid On {order.isDeliverd}
                        </span>
                      ) : (
                        <span variant="danger">Not Deliverd</span>
                      )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h2>Payment Method</h2>
                      <p>
                        <strong>Method :</strong>
                        <strong>{order.paymentMethod}</strong>
                      </p>
                      {order.isPaid ? (
                        <span variant="success">Paid On {order.paidAt}</span>
                      ) : (
                        <span variant="danger">Not Paid</span>
                      )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h2>Order Items</h2>
                      {order.orderItems.length === 0 ? (
                        <span>Your Cart is Empty</span>
                      ) : (
                        <ListGroup variant="flush">
                          {order.orderItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                              <Row>
                                <Col md={1}>
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fluid
                                  />
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
                  </Col>
                  <Col md={4}>
                    <Card>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h2>Order Summary</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col>Items</Col>
                            <Col>${order.itemsPrice}</Col>
                          </Row>
                          <Row>
                            <Col>Shipping</Col>
                            <Col>${order.shippingPrice}</Col>
                          </Row>
                          <Row>
                            <Col>Tax</Col>
                            <Col>${order.taxPrice}</Col>
                          </Row>
                          <Row>
                            <Col>Total</Col>
                            <Col>${order.totalPrice}</Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {error && <span variant="danger">{error}</span>}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                    {!order.isPaid && (
                      <ListGroup.Item>
                        {loadingPay && <Spinner />}
                        {!sdkReady ? (
                          <Spinner />
                        ) : (
                          <PayPalButton
                            amount={order.totalPrice}
                            onSuccess={successPaymentHandler}
                          />
                        )}
                      </ListGroup.Item>
                    )}
                  </Col>
                </Row>
              </>
            )}
          </OrderContainer>
        </Layout>
      </OrderScreenContainer>
    </>
  );
};

export default OrderScreen;
