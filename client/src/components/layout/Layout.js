import React from "react";
import styled from "styled-components";
const Layoutcontainer = styled.div`
  width: 100%;
  padding: 0 3.5rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Layoutcontainer>{children}</Layoutcontainer>
    </>
  );
};

export default Layout;
