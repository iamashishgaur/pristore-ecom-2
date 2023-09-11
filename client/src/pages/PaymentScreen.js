import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartAction";
import CheckoutStep from "../components/CheckoutStep";
import { useNavigate } from "react-router-dom";
// import Steps from "../component/Steps";
import Layout from "../components/layout/Layout";
import { styled } from "styled-components";
import { CartTitle } from "../styles/commanStyle";

const PaymentScreenContainer = styled.div`
  width: 100%;
  height: auto;
  border: 2px solid red;
`;
const PaymentContainer = styled.div`
  width: 100%;
  height: auto;
  border: 2px solid blue;
  padding: 2rem 5rem;
  margin-bottom: 20px;
`;

const PaymentScreen = ({ history }) => {
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const nav = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    nav("/shipping");
  }
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    nav("/placeorder");
  };

  const paymentHandleChange = (e) => {
    if (!isRadioChecked) {
      setIsRadioChecked(e.target.checked);
    } else {
      setPaymentMethod(e.target.value);
    }
  };

  return (
    <>
      <PaymentScreenContainer>
        <Layout>
          <CartTitle>
            <CheckoutStep step1 step2 step3 />
          </CartTitle>
          <PaymentContainer>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label as="legend">Select Payment Method</Form.Label>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Paypal or Credit Card"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    checked={isRadioChecked}
                    onChange={paymentHandleChange}
                  ></Form.Check>
                </Col>
              </Form.Group>
              <Button
                type="submit"
                disabled={!isRadioChecked}
                variant="primary"
              >
                Continue
              </Button>
            </Form>{" "}
          </PaymentContainer>
        </Layout>
      </PaymentScreenContainer>
    </>
  );
};

export default PaymentScreen;
