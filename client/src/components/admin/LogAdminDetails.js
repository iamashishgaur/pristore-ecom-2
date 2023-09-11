import React from "react";
import styled from "styled-components";
import { Headertitle } from "../../styles/commanStyle";
import adminimg from "../../assets/man1.avif";

const Logadmindetailscontainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Admindetailscontainer = styled.div``;
const Adminimage = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;

  img {
    border-radius: 100%;
    width: 100px;
    height: 100px;
    justify-content: center;
  }
`;
const Adminname = styled.div`
  margin: 1.2rem;
`;
const Admintitle = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 500;
`;
const LogAdminDetails = () => {
  return (
    <Logadmindetailscontainer>
      <Admintitle>Admin</Admintitle>
      <Admindetailscontainer>
        <Adminimage>
          <img src={adminimg} alt="admin" />
        </Adminimage>
        <Adminname>Ashish Kumar</Adminname>
      </Admindetailscontainer>
    </Logadmindetailscontainer>
  );
};

export default LogAdminDetails;
