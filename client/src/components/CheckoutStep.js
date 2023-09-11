import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { styled } from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 2rem; */
`;
const StepChekar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StepButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    & > svg {
      font-size: 30px;
      background: green;
      color: white;
    }
  }
`;

const CheckoutStep = ({ step1, step2, step3, step4 }) => {
  return (
    <>
      <StepContainer>
        <StepChekar>
          <Nav className="justify-content-center mb-4">
            <Nav.Item>
              {step1 ? (
                <LinkContainer to="/login">
                  <Nav.Link>SignIn</Nav.Link>
                </LinkContainer>
              ) : (
                <StepsWrapper>
                  <Nav.Link disabled>
                    {" "}
                    <BsCheckCircleFill />
                  </Nav.Link>
                </StepsWrapper>
              )}
            </Nav.Item>
            <Nav.Item>
              {step2 ? (
                <LinkContainer to="/shipping">
                  <Nav.Link>Address</Nav.Link>
                </LinkContainer>
              ) : (
                <Nav.Link disabled>Address</Nav.Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {step3 ? (
                <LinkContainer to="/payment">
                  <Nav.Link>Payment</Nav.Link>
                </LinkContainer>
              ) : (
                <Nav.Link disabled>Payment</Nav.Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {step4 ? (
                <LinkContainer to="/placeorder">
                  <Nav.Link>Place Order</Nav.Link>
                </LinkContainer>
              ) : (
                <Nav.Link disabled>Place Order</Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </StepChekar>
      </StepContainer>
    </>
  );
};

export default CheckoutStep;
