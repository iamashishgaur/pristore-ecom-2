import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import image404 from "../assets/pagenotfound.webp";

const Pagenotfound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageContainer = styled.div`
  & > img {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Button = styled.button`
  color: #fff;
  border: none;
  outline: none;
  padding: 14px 18px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  background: var(--button);
  &:hover {
    background: var(--buttonhover);
    box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 10%),
      0px 1px 4px -1px rgb(0 0 0 / 10%), 0px 1px 7px 1px rgb(0 0 0 / 10%);
  }
`;

const PageNotFound = () => {
  const nav = useNavigate();
  return (
    <Pagenotfound>
      <ImageContainer>
        <img src={image404} alt="PageNotFound" />
      </ImageContainer>
      <Button
        onClick={() => {
          nav("/");
        }}
      >
        Go to Home Page
      </Button>
    </Pagenotfound>
  );
};

export default PageNotFound;
