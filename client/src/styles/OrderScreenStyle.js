import { styled } from "styled-components";

export const OrderScreenContainer = styled.div`
  width: 100%;
  padding: 30px 10px;
`;
export const OrderContainer = styled.div`
  width: 100%;
  height: auto;
  border: 2px solid var(--border);
  padding: 30px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;
export const OrderAddress = styled.div`
  border: 2px solid var(--border);
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  gap: 12px;
`;
export const HeaderTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;
export const UserTitle = styled.div`
  font-size: 1.1rem;
  /* font-weight: 500; */
`;
export const AddressName = styled.div`
  letter-spacing: 0.2px;
  font-size: 1rem;
`;
export const PhoneNumber = styled.div`
  display: flex;
  gap: 20px;
`;

export const OrderItems = styled(OrderAddress)`
  display: flex;
  flex-direction: column;
  /* gap: 10; */
  padding: 5px;
`;
export const OrderInfo = styled.div`
  border: 2px solid var(--border);
  /* display: flex; */
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
`;
export const OrderImage = styled.div`
  border: 2px solid var(--border);
`;
export const OrderPrice = styled(OrderInfo)`
  border: 2px solid var(--border);
`;
export const OrderTitleName = styled.div`
  border: 2px solid var(--border);
  width: 100%;
  height: calc(300px - 140px);
`;
