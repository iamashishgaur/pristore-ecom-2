import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import Message from "../../component/spinner/Message";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../../components/spinner/Spinner";
import { register } from "../../actions/userAction";
import FormContainer from "../../components/FormContainer";
import Layout from "../../components/layout/Layout";
import { BiShowAlt, BiHide } from "react-icons/bi";
import {
  RegisterContainer,
  RegisterWrapper,
  HeaderTitle,
  NotAccount,
  TitleLogo,
  ContentWrapper,
  LockIcon,
  PasswordErrorMessage,
  Errormsg,
} from "../../styles/userFormStyle";

const Register = ({ location, history }) => {
  const nav = useNavigate();
  const [type, setType] = useState("password");
  const [validationMessage, setValidationMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location?.search ? location.search.split("=")[1] : "/";
  const [emailerror, setEmailError] = useState("");
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      notification();
      nav("/login");
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(register(name, email, number, password));
  };

  // Only Alphabet Name Validation
  const onlyAlphabets = function (evt) {
    const char = evt.key;
    const regex = new RegExp(/^[a-z A-Z\b]+$/);

    if (!regex.test(char)) evt.preventDefault();
  };

  // Email validation
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
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

  const notification = () => {
    toast.success(error);
  };

  // Phone Number Validation
  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setNumber(e.target.value);
    }
  };

  // password validation
  const handlepassword = (event) => {
    setPassword(event.target.value);
  };
  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex === password) {
      setValidationMessage("");
    }
    if (!passwordRegex.test(password)) {
      setValidationMessage(
        "Password must contain at least one lowercase , one uppercase , one digit, one special character, and be at least 8 characters long."
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

  // Password Toggles validation
  const toggleVisibilityOfPassword = function () {
    if (type === "text") setType("password");
    else setType("text");
  };
  return (
    <>
      {loading && <Spinner />}
      <RegisterContainer>
        <Layout>
          <RegisterWrapper>
            <FormContainer>
              <HeaderTitle>
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
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="enter full name"
                      className="input"
                      onKeyDown={onlyAlphabets}
                      value={name}
                      id="email"
                      onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="enter email"
                      value={email}
                      id="email"
                      onChange={handleEmailChange}
                    ></Form.Control>
                    {emailerror && (
                      <div className=" text-sm text-red-700">{emailerror}</div>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="enter number"
                      value={number}
                      onChange={handleChange}
                      id="number"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group style={{ position: " relative" }}>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type={type}
                      placeholder="enter password"
                      value={password}
                      id="password"
                      onChange={handlepassword}
                    ></Form.Control>
                    {validationMessage && (
                      <PasswordErrorMessage>
                        {validationMessage}
                      </PasswordErrorMessage>
                    )}
                    <LockIcon onClick={toggleVisibilityOfPassword}>
                      {type === "text" ? <BiShowAlt /> : <BiHide />}
                    </LockIcon>
                  </Form.Group>

                  <button type="submit" className="btn">
                    Register
                  </button>
                </Form>
              </ContentWrapper>
            </FormContainer>
            <NotAccount>
              <span>I have already a account | </span>{" "}
              <Link to="/login">Login</Link>
            </NotAccount>
          </RegisterWrapper>
        </Layout>
      </RegisterContainer>
      <ToastContainer />
    </>
  );
};

export default Register;
