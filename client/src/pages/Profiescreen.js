import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { message } from "antd";
import { Sidenavbardata } from "../components/sidenavbar";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/spinner/Message";
import {
  AiOutlineCloseCircle,
  AiOutlineHome,
  AiOutlineLogout,
} from "react-icons/ai";
import Spinner from "../components/spinner/Spinner";
import FormContainer from "../components/FormContainer";
import ShippingScreen from "./ShippingScreen";
import {
  getUserDetails,
  logout,
  updateUserProfile,
} from "../actions/userAction";
import { listMyOrders } from "../actions/orderAction";
import Layout from "../components/layout/Layout";

import {
  ProfileScreenContainer,
  ProfileContainer,
  ProfileLeftSideBar,
  ProfilePlayGround,
  ProfileTitle,
  ProfileIMG,
  ProfileUserName,
  ProfileSideNavbar,
  Logoutcontainer,
  Navbarcontainer,
  NavMenu,
  Title,
  RegisterWrapper,
  ProfileWrapper,
} from "../styles/ProfileStyle";
import ProfileLayout from "../components/ProfileLayout";

const ProfileScreen = ({ location, history }) => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isInputDisabled, setInputDisabled] = useState(true);

  const [isnotsave, setIsNotSave] = useState(false);

  const handleEditClick = () => {
    setInputDisabled(false);
    setIsNotSave(false);
  };

  const handleUpdateClick = () => {
    // Update profile information logic here
    setInputDisabled(true);
    setIsNotSave(true);
  };

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, orders, error: errorOrders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      nav("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
        setNumber(user.number);
      }
    }
  }, [history, userInfo, user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(
      updateUserProfile({ id: user._id, name, email, number, password })
    );
    setIsNotSave(false);
  };

  const logoutHandler = () => {
    dispatch(logout());
    nav("/");
  };

  return (
    <>
      <ProfileLayout>
        <RegisterWrapper>
          <FormContainer>
            {loading && <Spinner />}
            {success && <span variant="success">Profile Updated</span>}
            <ProfileWrapper>
              <Title>Profile Information</Title>
              <Title>
                {isInputDisabled ? (
                  <button onClick={handleEditClick}>Edit</button>
                ) : (
                  <button onClick={handleUpdateClick}>Save</button>
                )}
              </Title>
            </ProfileWrapper>
            <Form onSubmit={submitHandler} className="formWrapper">
              <Form.Group controlId="email">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter Name"
                  value={name}
                  disabled={isInputDisabled}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="enter email"
                  value={email}
                  disabled={isInputDisabled}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter number"
                  value={number}
                  disabled={isInputDisabled}
                  onChange={(e) => setNumber(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="current password"
                  value={password}
                  disabled={isInputDisabled}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="enter new password"
                  value={confirmPassword}
                  disabled={isInputDisabled}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" className="btn" disabled={!isnotsave}>
                Update Profile
              </Button>
            </Form>
            {/* <ShippingScreen /> */}
          </FormContainer>
        </RegisterWrapper>
      </ProfileLayout>
    </>
  );
};

export default ProfileScreen;
