import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  background: var(--black);
  color: white;
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`;
export const NavLogo = styled.div`
  cursor: pointer;

  width: 150px;
`;
export const NavbarRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const CategoryMenu = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 60px;
  & > li {
    list-style: none;
    cursor: pointer;
    & > a {
      text-decoration: none;
      color: white;
      font-size: 1.1rem;
      &:hover {
        color: var(--button);
        transition: all ease-in-out 0.5s;
      }
    }
  }
`;
export const CartCount = styled.div`
  width: 15px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 14px;
  cursor: pointer;
  bottom: 15px;
  height: 16px;
  border-radius: 50%;
  background: red;
  z-index: 999;
  & > p {
    color: white;
    font-size: 12px;
    margin-top: 13px;
    font-weight: 600;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
export const CartContainer = styled.div`
  position: relative;
  & > a {
    color: white;
    & > svg {
      font-size: 25px;
      cursor: pointer;
    }
  }
`;
export const LoginContainer = styled(CartContainer)`
  & > a {
    & > svg {
      font-size: 30px;
    }
  }
`;
