import React from "react";
import {
  Logoutcontainer,
  NavMenu,
  Navbarcontainer,
  ProfileContainer,
  ProfileIMG,
  ProfileLeftSideBar,
  ProfilePlayGround,
  ProfileScreenContainer,
  ProfileSideNavbar,
  ProfileTitle,
  ProfileUserName,
} from "../styles/ProfileStyle";
import { AiOutlineLogout } from "react-icons/ai";
import { Sidenavbardata } from "./sidenavbar";
import Layout from "./layout/Layout";
import { logout } from "../actions/userAction";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProfileLayout = ({ children }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  const logoutHandler = () => {
    dispatch(logout());
    nav("/");
  };
  return (
    <>
      <ProfileScreenContainer>
        <Layout>
          <ProfileContainer>
            <ProfileLeftSideBar>
              <ProfileTitle>
                <ProfileIMG>img</ProfileIMG>
                <ProfileUserName>
                  <span>Hello,</span>
                  <h1>{user.name}</h1>
                </ProfileUserName>
              </ProfileTitle>
              <ProfileSideNavbar>
                <Navbarcontainer>
                  {Sidenavbardata.map((item, index) => {
                    return (
                      <NavMenu>
                        <li key={index}>
                          {item.icon}
                          <Link to={item.path}>{item.navname}</Link>
                        </li>
                      </NavMenu>
                    );
                  })}
                </Navbarcontainer>
                <Logoutcontainer>
                  <span onClick={logoutHandler}>
                    <AiOutlineLogout /> <p>Logout</p>
                  </span>
                </Logoutcontainer>
              </ProfileSideNavbar>
            </ProfileLeftSideBar>
            <ProfilePlayGround>{children}</ProfilePlayGround>
          </ProfileContainer>
        </Layout>
      </ProfileScreenContainer>
    </>
  );
};

export default ProfileLayout;
