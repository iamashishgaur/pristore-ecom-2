import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  width: 100%;
`;
export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 5rem;

  display: grid;
  grid-template-columns: 45% 55%;
`;
export const ProductImage = styled.div`
  background: #fff;
  border-radius: 7px 0 0 7px;
  width: 100%;
  border-right: none;

  box-shadow: 0px 0px 0px 2px #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
export const ProductTitles = styled.div`
  font-weight: 500;
  margin-top: 15px;
  margin-left: 100px;
  font-size: 25px;
`;
export const ProductInfo = styled.div`
  border-radius: 0 7px 7px 0;
  background: #fff;
  width: 100%;
  border-left: none;
  box-shadow: 0px 0px 0px 2px #ddd;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  hr {
    background-color: transparent;
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-top: 1px solid #bbbfbf;
    display: block;
    height: 1px;
    line-height: 19px;
    /* margin-bottom: 14px; */
    margin-top: 0;
  }
`;

export const ProductTitle = styled.div`
  font-size: 28px;
  line-height: 40px;

  & > span {
    font-weight: 600;
  }
`;
export const ProductPriceWrapper = styled.div`
  display: flex;
  text-transform: capitalize;
  font-size: 16px;
  /* line-height: 24px; */
  margin: 10px 0;
  gap: 10px;
  & > p {
    display: block;
    font-size: 12px;
  }
`;

export const DiscountPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: green;
`;
export const ProductStock = styled.div`
  display: flex;
  gap: 30px;
`;
export const Stock = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;
export const DisCountParcentag = styled.div`
  color: red;
`;
export const ProductPrice = styled.div`
  font-size: 14px;
  & > span {
    text-decoration: line-through;
  }
`;
export const ProductRating = styled.div`
  margin-bottom: 5px;
  display: flex;
  /* justify-content: space-between; */
  gap: 70px;
`;
export const ProductDiscription = styled.div`
  margin: 6px 0;
  font-size: 18px;
  word-spacing: 0px;
  color: #483939;
  text-align: justify;
  font-family: Poppins;
`;
export const ProductColor = styled.div`
  display: flex;
  margin: 7px 0;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #877a7a;
`;

export const ColorWrapper = styled.div`
  margin-left: 45px;
  display: flex;
  gap: 7px;
  & > svg {
    cursor: pointer;
  }
`;
export const QTYSelection = styled.div`
  margin-left: 25px;
  width: 70px;
  height: 30px;
  box-shadow: 0px 0px 0px 2px var(--border);
  border-radius: 6px;
  & > select {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 6px;
    border: none;
    outline: none;
    &:focus,
    &:active {
      box-shadow: 0px 0px 0px 1px var(--button);
    }
  }
`;
export const ProductQTY = styled.div`
  display: flex;
  margin: 7px 0;
`;
export const QTYBox = styled.div`
  &:nth-child(2) {
    width: 60px;
    height: 30px;
    border-radius: 20px;
    border: 2px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
  svg {
    cursor: pointer;
    font-size: 20px;
    color: gray;
  }
`;
export const Buttonwrapper = styled.div`
  margin: 7px 0;
  margin-left: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-items: center;
`;

export const AddCartButton = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  border-radius: 20px;
  border: none;
  outline: none;
  background: var(--button);
  cursor: pointer;
  color: white;

  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
  border: none;

  &:hover {
    background-image: linear-gradient(to right, var(--buttonhover));
  }
  & > a {
    display: flex;
    text-shadow: 1px 1px 2px pink;
    align-items: center;
    justify-items: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
`;
export const WishList = styled(AddCartButton)`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 4px;
  & > svg {
    font-size: 16px;
  }
`;
