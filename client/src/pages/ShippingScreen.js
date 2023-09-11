import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FromContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartAction";
import { useNavigate } from "react-router-dom";
import ChekcoutStep from "../components/CheckoutStep";
// import Steps from "../component/Steps";
import Layout from "../components/layout/Layout";
import { styled } from "styled-components";
import { CartTitle } from "../styles/commanStyle";
import { CountriesList } from "../components/CunteryList";

const ShippingContainer = styled.div`
  /* background: var(--body); */
`;
const ShippingWrapper = styled.div`
  padding-bottom: 3rem;
`;

const ShippingScreen = ({ history }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [country, setCountry] = useState(shippingAddress.country);
  const [name, setName] = useState(shippingAddress.name);
  const [number, setPhoneNumber] = useState(shippingAddress.number);
  const [pincode, setPincode] = useState(shippingAddress.pincode);
  const [housenumber, setHousenumber] = useState(shippingAddress.housenumber);
  const [address, setAddress] = useState(shippingAddress.address);
  const [landmark, setLandMark] = useState(shippingAddress.landmark);
  const [city, setCity] = useState(shippingAddress.city);
  const [state, setState] = useState(shippingAddress.state);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(
      saveShippingAddress({
        country,
        name,
        number,
        pincode,
        housenumber,
        address,
        landmark,
        city,
        state,
      })
    );
    nav("/payment");
  };

  return (
    <>
      <ShippingContainer>
        <Layout>
          <ShippingWrapper>
            <CartTitle>
              <ChekcoutStep step1 step2 />
            </CartTitle>
            <FromContainer>
              <Form onSubmit={submitHandler} className="formstyle">
                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="name">
                  <Form.Label>Full name (First and Last name)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="number">
                  <Form.Label>Mobil Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone Number"
                    value={number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="pincode">
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="housenumber">
                  <Form.Label>
                    Flat, House no., Building,Company,Apartment
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Flat, House no."
                    value={housenumber}
                    onChange={(e) => setHousenumber(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Area, Street, Sector, Village</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label> Landmark</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    value={landmark}
                    onChange={(e) => setLandMark(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="city">
                  <Form.Label> Town/city </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                  continue
                </Button>
              </Form>
            </FromContainer>
          </ShippingWrapper>
        </Layout>
      </ShippingContainer>
    </>
  );
};

export default ShippingScreen;

// <Form.Group>
//   <Form.Label>Country/Region</Form.Label>
//   <br></br>
//   <select className="countryfield">
//     {CountriesList.map((option) => (
//       <option
//         key={option.name}
//         value={country}
//         onChange={(e) => setCountry(e.target.value)}
//         defaultValue="IN"
//         id="country"
//         required
//       >
//         {option.name}
//       </option>
//     ))}
//   </select>
// </Form.Group>;
