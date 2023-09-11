import React from "react";
import styled from "styled-components";
import LogAdminDetails from "./LogAdminDetails";
import { Headertitle } from "../../styles/commanStyle";
import { Sidenavbardata } from "./sidenavbar";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const SidepanelContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const AdminProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 13px;
  & > span {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;
const Navbarcontainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  & > span {
    display: flex;
    gap: 12px;
    align-items: center;
    cursor: pointer;
    & > p {
      color: gray;
      margin-bottom: 0;
    }
    & > li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 10px;
      & > svg {
        font-size: 1.2rem;
      }
    }
  }
  & > a {
    text-decoration: none;
    color: gray;
  }
`;
const Adminnavcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  justify-content: space-between;
`;

const Logo = styled.div`
  width: 35px;
  height: 35px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
const Navbar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: #fff;

  & > li {
    list-style: none;
    transition: 0.5s;
    & > li:hover {
      background: #f5f5f5;
      transition: 0.5s;
    }
    & > a {
      text-decoration: none;
      font-size: 1rem;
      font-family: math;
      color: #666;
      font-weight: 600;
      display: flex;
      padding: 12px 23px;
      align-items: center;
      gap: 10px;
      & > svg {
        color: #757070;
        font-size: 1.2rem;
      }
      &:hover {
        background-color: #eee;
        border-radius: 5px;
      }
    }
  }
`;
const LogoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  border-radius: 6px;
  background: #fff;
  list-style: none;
  transition: 0.5s;
  &:hover {
    background: #f5f5f5;
    transition: 0.5s;
  }
  & > a {
    text-decoration: none;
    font-size: 1rem;
    font-family: math;
    color: #666;
    font-weight: 600;
    display: flex;
    padding: 12px 23px;
    align-items: center;
    gap: 10px;
    & > svg {
      color: #757070;
      font-size: 1.2rem;
    }
    &:hover {
      background-color: #eee;
      border-radius: 5px;
    }
  }
`;
const Sidepanel = () => {
  return (
    <SidepanelContainer>
      <AdminProfile>
        <Logo>
          <img src="/favicon.png" alt="Pristore" />
        </Logo>
        <span>Pristore</span>
      </AdminProfile>
      <Adminnavcontainer>
        <Navbarcontainer>
          {Sidenavbardata.map((item, index) => {
            return (
              <Navbar>
                <li key={index}>
                  <Link to={item.path}>
                    {item.icon}
                    {item.navname}
                  </Link>
                </li>
              </Navbar>
            );
          })}
        </Navbarcontainer>
        <LogoutWrapper>
          <Link to="logout">
            <AiOutlineLogout /> Logout
          </Link>
        </LogoutWrapper>
      </Adminnavcontainer>
    </SidepanelContainer>
  );
};

export default Sidepanel;
