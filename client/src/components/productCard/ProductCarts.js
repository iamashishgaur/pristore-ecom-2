import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../layout/Layout";
import Cart from "./ProductCart";
import { NavLink } from "react-router-dom";
import { CategoryData } from "../../data/navdata";
import styled from "styled-components";
import { listProducts } from "../../actions/productActions";
import Spinner from "../spinner/Spinner";
import Message from "../spinner/Message";

const ProductsContainer = styled.div`
  width: 100%;
  margin: 2.5rem 0;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const CategoryMenu = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  font-size: 1rem;
  & > li {
    padding: 6px 8px;
    list-style: none;
    border-radius: 6px;
    box-shadow: 0px 0px 0px 2px #ddd;
    cursor: pointer;
    &:hover {
      width: auto;
      height: auto;
      box-shadow: 0px 0px 0px 2px var(--button);
      border-radius: 50px;
    }
    & > a {
      text-decoration: none;
      color: #04152d;
      &:hover {
        transition: all ease-in-out 0.5s;
        color: var(--buttonhover);
      }
    }
  }
`;
const ProductCartWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 1.8rem 0;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;
const ProductCarts = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <ProductsContainer>
        <Layout>
          <ProductWrapper>
            <CategoryMenu>
              {CategoryData.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink className={item.cName} to={item.path}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </CategoryMenu>
            {loading ? (
              <Spinner />
            ) : error ? (
              <Message>{error}</Message>
            ) : (
              <ProductCartWrapper>
                {products.map((product) => {
                  return (
                    <div key={product._id}>
                      <Cart product={product} />
                    </div>
                  );
                })}
              </ProductCartWrapper>
            )}
          </ProductWrapper>
        </Layout>
      </ProductsContainer>
    </>
  );
};

export default ProductCarts;
