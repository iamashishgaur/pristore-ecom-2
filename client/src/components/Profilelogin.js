import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userAction";
import { message } from "antd";
import { AiOutlineLogout, AiOutlineHeart } from "react-icons/ai";
import { BsBagHeartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";

const Profilecontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 999;
  h3 {
    font-size: 1rem;
    text-align: end;
    font-weight: 500;
    line-height: 1rem;
    color: #555;
    cursor: pointer;
    span {
      font-size: 0.75rem;
      color: #777;
    }
  }
`;
const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    object-fit: cover;
  }
`;
const ProfileBox = styled.div`
  position: absolute;
  top: 52px;
  right: -21px;
  width: 200px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.5s;
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: 27px;
    z-index: -99;
    width: 20px;
    height: 20px;
    background-color: white;
    transform: rotate(45deg);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileMenu = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  & > li {
    list-style: none;
  }
`;
const UserInfo = styled.div`
  display: flex;
  background: #ddffe68c;
  justify-content: center;
  align-items: center;
  color: #674b4b;
  font-size: 1.1rem;
  padding: 9px 0;
  font-weight: 400;
`;
const Navbar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  border-radius: 6px;
  background: #fff;
  margin-top: 10px;
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
const Profilelogin = ({ userInfo }) => {
  const [wishlist, setWishlist] = useState(0);
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const menuRef = useRef();
  const ImgRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== ImgRef.current) {
      setShow(false);
    }
  });
  const handlclick = () => setShow(!show);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    message.success("Logout Successfully");
    nav("/");
  };

  return (
    <>
      <Profilecontainer>
        <Profile>
          <ImgContainer>
            <img
              ref={ImgRef}
              src="/favicon.png"
              alt=""
              title={userInfo.name}
              onClick={handlclick}
            />
          </ImgContainer>
        </Profile>
        {show && (
          <ProfileBox ref={menuRef}>
            <ProfileMenu>
              <UserInfo>{userInfo.name}</UserInfo>

              <Navbar>
                <li onClick={handlclick}>
                  <Link to="/profile">
                    <HiOutlineUserCircle />
                    Profile
                  </Link>
                </li>
                <li onClick={handlclick}>
                  <Link to="/myorder">
                    <BsBagHeartFill />
                    My Order
                  </Link>
                </li>
                <li onClick={handlclick}>
                  <Link to="/myorder">
                    <AiOutlineHeart />
                    Wishlist (0)
                  </Link>
                </li>
                <li onClick={logoutHandler}>
                  <Link to="" onClick={handlclick}>
                    <AiOutlineLogout />
                    Logout
                  </Link>
                </li>
              </Navbar>
            </ProfileMenu>
          </ProfileBox>
        )}
      </Profilecontainer>
    </>
  );
};

export default Profilelogin;
// {menudata.map((item) => {
//   return (
//     <li onClick={handlclick}>
//       <NavLink to={item.path}>
//         {item.icon}
//         {item.title}
//       </NavLink>
//     </li>
//   );
// })}
