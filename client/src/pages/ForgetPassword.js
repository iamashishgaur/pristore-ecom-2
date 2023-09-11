import React from "react";
import styled from "styled-components";
import { Button } from "../styles/commanStyle";
import {
  ForgetPassContainer,
  InputText,
  FormWraper,
  HeaderText,
} from "../styles/Style";

const Ortext = styled.div`
  text-align: center;
  color: #5f6368;
`;

const ForgetPassword = () => {
  return (
    <ForgetPassContainer>
      <FormWraper style={{ padding: "30px 30px" }}>
        <HeaderText>Forget Password</HeaderText>
        <InputText type="email" placeholder="enter email" required />
        <Button>Send OTP</Button>
        <Ortext>or</Ortext>
        <InputText type="number" placeholder="enter otp" required />
        <Button>Verify OTP</Button>
      </FormWraper>
    </ForgetPassContainer>
  );
};

export default ForgetPassword;
