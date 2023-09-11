import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarRight,
  NavbarLeft,
  NavLogo,
  CartContainer,
  LoginContainer,
  CartCount,
  CategoryMenu,
  RightWrapper,
} from "./navbarstyle";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import Layout from "../layout/Layout";
import { NavbarData } from "../../data/navdata";
import Profilelogin from "../Profilelogin";

const Navbar = () => {
  const nav = useNavigate();
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <>
      <NavbarContainer>
        <Layout>
          <NavbarWrapper>
            <NavbarLeft>
              <NavLogo
                onClick={() => {
                  nav("/");
                }}
              >
                <img src="/images/Store.png" alt="Pristore" />
              </NavLogo>
            </NavbarLeft>

            <NavbarRight>
              <CategoryMenu>
                {NavbarData.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link className={item.cName} to={item.path}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </CategoryMenu>
              <RightWrapper>
                <CartContainer>
                  <Link to="/cart">
                    <AiOutlineShoppingCart />
                  </Link>
                  <CartCount>
                    <p>{cartState.cartItems.length}</p>
                  </CartCount>
                </CartContainer>
                {userInfo ? (
                  <Profilelogin userInfo={userInfo} />
                ) : (
                  <LoginContainer>
                    <Link to="/login">
                      <BsPersonCircle />
                    </Link>
                  </LoginContainer>
                )}
              </RightWrapper>
            </NavbarRight>
          </NavbarWrapper>
        </Layout>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
