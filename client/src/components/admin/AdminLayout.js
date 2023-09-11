import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidepanel from "./Sidepanel";

const Admindashboardcontainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  gap: 10px;
  border: 1px solid red;
  padding: 10px;
`;
const SidePannelContainer = styled.div`
  /* width: 18%; */
  /* height: 100vh; */
  border: 1px solid orange;
`;
const AdminPlayGroundContainer = styled.div`
  /* width: calc(100% - 18%); */
  /* height: 100vh; */
  border: 1px solid orange;
`;
const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttoncontainer = styled.div``;
const AdminPlayGround = styled.div``;
const AdminLayout = ({ children }) => {
  return (
    <>
      <Admindashboardcontainer>
        <SidePannelContainer>
          <Sidepanel />
        </SidePannelContainer>
        <AdminPlayGroundContainer>
          <NavbarContainer>
            <Navbar />
          </NavbarContainer>
          <AdminPlayGround>{children}</AdminPlayGround>
        </AdminPlayGroundContainer>
      </Admindashboardcontainer>
    </>
  );
};

export default AdminLayout;
