import styled from "styled-components";

export const ProductBoxWrapper = styled.div`
  /* border:2px solid red; */
  & > h3 {
    font-size: 1rem;
  }
  & > span {
    color: gray;
  }
`;
export const ProductBox = styled.div`
  width: 270px;
  height: auto;
  display: flex;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 6px;
  flex-direction: column;
  background: #fff;
  padding: 10px;
`;
export const ProductImage = styled.div`
  width: 100%;
  height: 76%;
  cursor: pointer;
  & > a {
    & > img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-size: cover;
    }
  }
`;
export const ProductDetails = styled.div`
  padding-top: 0.7rem;
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  opacity: 0.5;
  opacity: 1;
  text-transform: capitalize;
  flex-wrap: wrap;
`;
export const ProductPrice = styled(ProductTitle)`
  text-decoration: line-through;
`;

export const ProductRating = styled.div``;
export const FavouriteProduct = styled.div`
  position: absolute;
  svg {
    cursor: pointer;
    font-size: 1.2rem;
  }
`;
export const ProductdisPrice = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color:green;
`;
export const Titlewrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
