import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import Pnaelboxdetails from "../../components/admin/Panelboxdetails";
import { Button } from "../../styles/commanStyle";
import { styled } from "styled-components";

const AdminBoxContainer = styled.div`
  width: 100%;
  /* margin-top: 1rem; */
  height: 190px;

  border: 1px solid black;
`;
const RecentorderTablecontainer = styled.div`
  /* margin-top: 1.5rem; */
`;

const Tabledatacontainer = styled.div`
  /* margin-top: 1.5rem; */
  border: 1px solid skyblue;
  width: 100%;
  /* height: calc(100vh - 370px); */
`;
const Headertitle = styled.div`
  font-size: 1.5rem;
  color: gray;
`;
const Middledatacontainer = styled.div`
  display: flex;
  margin: 0.8rem 0;
  /* padding:0 2rem; */
  justify-content: space-between;
  align-items: center;
`;
const Buttoncontainer = styled.div``;
const AdminDashBoard = () => {
  return (
    <>
      <AdminLayout>
        <AdminBoxContainer>
          <Pnaelboxdetails />
        </AdminBoxContainer>
        <RecentorderTablecontainer>
          <Middledatacontainer>
            <Headertitle>Recent Order</Headertitle>
            <Buttoncontainer>
              <Button>Export CSV</Button>
            </Buttoncontainer>
          </Middledatacontainer>
          <Tabledatacontainer></Tabledatacontainer>
        </RecentorderTablecontainer>
      </AdminLayout>
    </>
  );
};

export default AdminDashBoard;
