import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import { login } from "../../actions/userAction";
import FormContainer from "../../components/FormContainer";
import { BiShowAlt, BiHide } from "react-icons/bi";
import Layout from "../../components/layout/Layout";
import {
  RegisterContainer,
  RegisterWrapper,
  HeaderTitle,
  Title,
  NotAccount,
  TitleLogo,
  LockIcon,
  ContentWrapper,
  Errormsg,
  PasswordErrorMessage,
} from "../../styles/userFormStyle";

const Login = ({ history }) => {
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [emailerror, setEmailError] = useState("");
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      // history.push(redirect);
      nav("/");
    }
  }, [userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(login(email, password));
  };

  // show and hide password
  const toggleVisibilityOfPassword = function () {
    if (type === "text") setType("password");
    else setType("text");
  };

  // email validation

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };
  useEffect(() => {
    if (!email) {
      setEmailError("");
    } else {
      validateEmail();
    }
  }, [email]);

  // password validation
  const handlepassword = (event) => {
    setPassword(event.target.value);
  };
  const [validationMessage, setValidationMessage] = useState("");

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex === password) {
      setValidationMessage("");
    }
    if (!passwordRegex.test(password)) {
      setValidationMessage(
        "Password must contain at least one lowercase , one uppercase, one digit, one special character, and be at least 8 characters long."
      );
    } else {
      setValidationMessage("");
    }
  };
  useEffect(() => {
    if (!password) {
      setValidationMessage("");
    } else {
      validatePassword();
    }
  }, [password]);

  return (
    <>
      {loading && <Spinner />}
      <RegisterContainer>
        <Layout>
          <RegisterWrapper>
            <FormContainer>
              <HeaderTitle>
                <Title>Welcome Back</Title>
                <TitleLogo>
                  <img src="/favicon.png" alt="" />
                  <Link to="/">
                    <span>Pristore.in</span>
                  </Link>
                </TitleLogo>
              </HeaderTitle>
              {error && <Errormsg>{error}</Errormsg>}
              <ContentWrapper>
                <Form className="formWrapper" onSubmit={submitHandler}>
                  <Form.Group>
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="enter email"
                      value={email}
                      id="email"
                      autoFocus
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                    {emailerror && (
                      <div className=" text-sm text-red-700">{emailerror}</div>
                    )}
                  </Form.Group>

                  <Form.Group style={{ position: " relative" }}>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type={type}
                      placeholder="enter password"
                      value={password}
                      onChange={handlepassword}
                      id="password"
                    ></Form.Control>
                    {validationMessage && (
                      <PasswordErrorMessage>
                        {validationMessage}
                      </PasswordErrorMessage>
                    )}
                    <LockIcon onClick={toggleVisibilityOfPassword}>
                      {type === "text" ? <BiShowAlt /> : <BiHide />}
                    </LockIcon>
                    <Link
                      to="/forget-password"
                      style={{ fontSize: "13px", color: "blue" }}
                    >
                      Forget Password
                    </Link>
                  </Form.Group>

                  <button type="submit" className="btn">
                    Login
                  </button>
                </Form>
              </ContentWrapper>

              <NotAccount>
                <span>Not a any account ?</span>
                <Link to="/register">Register</Link>
              </NotAccount>
            </FormContainer>
          </RegisterWrapper>
        </Layout>
      </RegisterContainer>
    </>
  );
};

export default Login;
