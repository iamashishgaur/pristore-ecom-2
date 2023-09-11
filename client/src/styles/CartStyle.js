import styled from "styled-components";
import { Button } from "./commanStyle";
export const CartPageContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;
export const CartContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 23px;
  display: grid;
  grid-template-columns: 68% 30%;
`;

export const CartLeft = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px;
  & > hr {
    background-color: transparent;
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-top: 1px solid #bbbfbf;
    display: block;
    height: 1px;
    line-height: 19px;
    margin-top: 18px;
  }
`;
export const CartRight = styled.div`
  border: 1px solid var(--border);
  height: 420px;
  border-radius: 8px;
  hr {
    background-color: transparent;
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-top: 1px solid #bbbfbf;
    display: block;
    height: 1px;
    line-height: 19px;
    /* margin-top: 18px; */
    /* margin-top: 0.8rem; */
  }
`;
export const SummaryTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 20px;
`;
export const TotalSummaryContainer = styled.div`
  border-radius: 8px;
  margin-top: 10px;
  width: 100;
  height: auto;
  background: white;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 10px 7px;
`;
export const ItemPriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 1.1rem;
`;
export const ItemTitle = styled.div``;
export const SavePriceInfo = styled.div`
  width: 100%;
  height: 50px;
  background: #c9fbc98f;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: forestgreen;
  padding: 0 16px;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: justify;
`;
export const CheckOutButton = styled(Button)`
  display: flex;
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 1rem;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
`;
export const CartItemsWrapper = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
`;
export const ItemPrice = styled.div`
  & > span {
    font-size: 1.1rem;
    /* font-weight: 500; */
  }
`;
export const EmptyCart = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
  & > h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
export const EmptyIMG = styled.div`
  width: 100;
  /* height: 100vh; */
  /* border: 1px solid red; */
`;
export const BackToShop = styled.div`
  color: #fff;
  border: none;
  outline: none;
  margin-top: 1.5rem;
  padding: 12px 18px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  background: var(--button);
  &:hover {
    background: var(--buttonhover);
    box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 10%),
      0px 1px 4px -1px rgb(0 0 0 / 10%), 0px 1px 7px 1px rgb(0 0 0 / 10%);
  }
`;

export const Buttonwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 2rem;
`;
export const BackToShops = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  border-radius: 4px;
  border: 1px solid var(--border);
  cursor: pointer;
  &:hover {
    background: #c9fbc98f;
  }
`;
export const CheckOutButtons = styled.div`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--border);
  &:hover {
    background: var(--button);
    cursor: pointer;
    color: white;
  }
`;
export const DiscountPriceInfo = styled(ItemPriceInfo)``;

export const DiscountPrice = styled.div`
  color: green;
  text-decoration: line-through;
`;

export const DeliveryChargesInfo = styled(ItemPriceInfo)``;
export const DeliveryInfo = styled.div`
  color: green;
`;
export const TotalPriceInfo = styled(ItemPriceInfo)``;
export const TotalPrice = styled.div`
  & > span {
    font-weight: 600;
  }
`;
