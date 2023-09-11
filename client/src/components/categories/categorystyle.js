import styled from "styled-components";
export const CategoryContainer = styled.div`
  width: 100%;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CategoryTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
export const Cleft = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const CategoryProduct = styled.div`
  display: flex;
  gap: 10px;
`;

// CategoryItemContainer

export const CategoryItems = styled.div`
  width: 150px;
  border: 1px solid gray;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
`;
export const CategoryImage = styled.div`
  /* width: 150px; */
`;
export const CategoryItemTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;
