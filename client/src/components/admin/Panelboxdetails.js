import React from "react";
import styled from "styled-components";

const PanelboxContainer = styled.div`
  /* width: 500px; */
  padding: 20px;
  gap: 20px;
  display: flex;

`;


const Boxdetails = styled.div`
  width: 30%;
  height: 150px;
  border: 1px solid red;
  border-radius: 8px;
`;
const Panelboxdetails = () => {
  return (
    <>
      <PanelboxContainer>
        <Boxdetails>5</Boxdetails>
        <Boxdetails>5</Boxdetails>
        <Boxdetails>5</Boxdetails>
        <Boxdetails>5</Boxdetails>
        <Boxdetails>5</Boxdetails>
      </PanelboxContainer>
    </>
  );
};

export default Panelboxdetails;
