import React from "react";
import styled from "styled-components";
import {
  AiFillBell,
  AiOutlineSearch,
  AiOutlineAlignLeft,
} from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Headertitle } from "../../styles/commanStyle";
import { useSelector } from "react-redux";

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;
const NavbarLeft = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  & > svg {
    margin-left: 1.5rem;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;
const Navbarright = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchbarContainer = styled.div`
  width: 50%;
  position: relative;
  & > svg {
    position: absolute;
    top: 24%;
    left: 92%;
    font-size: 20px;
    cursor: pointer;
  }
  input {
    width: 100%;
    border-radius: 6px;
    padding: 6px 26px 6px 8px;
    outline: none;
    font-size: 1rem;
    border: 1px solid #d9d3d3;
    color: gray;
  }
`;
const HumburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-right: 30px;
  & > svg {
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
const Navbar = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  return (
    <>
      <NavbarContainer>
        <NavbarLeft>
          <AiOutlineAlignLeft />
          <Headertitle>Welcome, {user.name}</Headertitle>
        </NavbarLeft>
        <Navbarright>
          <SearchbarContainer>
            <input type="text" name="text" placeholder="search..." />
            <AiOutlineSearch />
          </SearchbarContainer>
          <HumburgerContainer>
            <CiDark />
            <MdOutlineLightMode />
            <AiFillBell />
            <CgProfile />
          </HumburgerContainer>
        </Navbarright>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
