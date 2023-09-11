import React from "react";
import { Button } from "../styles/commanStyle";
import {
  ForgetPassContainer,
  InputText,
  FormWraper,
  HeaderText,
} from "../styles/Style";

const ForgetPassword = () => {
  return (
    <ForgetPassContainer>
      <FormWraper style={{ padding: "30px 30px" }}>
        <HeaderText>Create New Password</HeaderText>
        <InputText type="text" placeholder="Password" required />
        <InputText type="text" placeholder="Confirm Password" required />
        <Button>Genrate New Password</Button>
      </FormWraper>
    </ForgetPassContainer>
  );
};

export default ForgetPassword;
