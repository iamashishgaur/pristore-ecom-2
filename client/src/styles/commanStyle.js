import styled from "styled-components";

// export const Button = styled.button`
//   padding: 10px 14px;
//   border-radius: 6px;
//   border: none;
//   outline: none;
//   width: 80%;
//   margin: 0 auto;
//   font-size: 1rem;
//   background: var(--button);
//   cursor: pointer;
//   color: white;

//   & > a {
//     text-decoration: none;
//     font-size: 14px;
//     color: white;
//   }
// `;
export const CartTitle = styled.div`
  background: #f8f9fa;
  width: 100%;
  height: auto;
  display: flex;
  padding: 1rem 0;
  border-radius: 0 0 5px 5px;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 25px;
  cursor: pointer;
  border-radius: 5px;
  background: #e444de;
  height: 35px;
  color:white;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    background: #e817e0;
  }
`;
export const Headertitle = styled.div`
  font-size: 1.3rem;
`;
