import React from "react";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ProductQTY, Title, QTYSelection } from "../styles/ProductDetailsStyle";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartAction";
import { Link } from "react-router-dom";

const CartItem = styled.div`
  width: 100%;
  padding: 6px;
  box-shadow: 0px 0px 0px 1px var(--border);
  border-radius: 7px;
  display: flex;
  display: grid;
  grid-template-columns: 16% 84%;
  &:hover {
    background: #dff3df8a;
    cursor: pointer;
  }
`;
const ItemImage = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 5px;
  & > a {
    & > img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-size: cover;
      background-position: center;
    }
  }
`;
const ItemDetails = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;
const ItemWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  justify-content: space-between;
`;
const ItemName = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: capitalize;
`;
const ItemPrice = styled.div`
  margin-right: 20px;
  font-size: 1.2rem;
  & > span {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
const ItemQTYWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemDeleteButton = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    cursor: pointer;
    font-size: 1.3rem;
  }
  /* &:hover {
    background: var(--border);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: red;
   
  } */
`;

const Cartitem = ({ item }) => {
  const dispatch = useDispatch();
  const removeitem = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <CartItem>
        <ItemImage>
          <Link to={`/product/${item.product}`}>
            <img src={item.image} alt={item.name} />
          </Link>
        </ItemImage>
        <ItemDetails>
          <ItemWrapper>
            <Link to={`/product/${item.product}`}>
              <ItemName>{item.name}</ItemName>
            </Link>
            <ItemPrice>
              M.R.P : ₹ <span>{item.price}</span>
            </ItemPrice>
          </ItemWrapper>
          <ItemQTYWrapper>
            <ProductQTY>
              <Title>Quantity: </Title>
              <QTYSelection>
                <select
                  as="select"
                  value={item.qty}
                  onChange={(e) =>
                    dispatch(addToCart(item.product, Number(e.target.value)))
                  }
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </QTYSelection>
            </ProductQTY>
            <ItemDeleteButton>
              <RiDeleteBin6Line onClick={() => removeitem(item.product)} />
            </ItemDeleteButton>
          </ItemQTYWrapper>
        </ItemDetails>
      </CartItem>
    </>
  );
};

export default Cartitem;
