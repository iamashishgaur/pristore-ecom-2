import styled from "styled-components";

export const ForgetPassContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InputWrapper = styled.div`
  gap: 7px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  & > label {
    color: #5f6368;
  }
  & > svg {
    position: absolute;
    top: 34.8%;
    right: 13%;
    // display:none;
  }
`;
export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid red;
  /* height: calc(100vh - 60px); */
`;
export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Headertitle = styled.div`
  text-align: center;
`;
export const InputText = styled.input`
  padding: 12px 12px;
  flex: 1;
  border-radius: 8px;
  font-size: 0.8rem;
  outline: none;
  border: none;
  box-shadow: 0px 0px 0px 2px #ddd;
  &:focus {
    box-shadow: 0px 0px 0px 2px #e85fab;
  }
`;

export const InputBoxwrapper = styled.div`
  gap: 25px;
  display: flex;
  position: relative;
  flex-direction: column;
  & > label {
    color: #5f6368;
  }
  & > svg {
    position: absolute;
    top: 60%;
    right: 5%;
  }
`;
export const Button = styled.button`
  color: #fff;
  border: none;
  outline: none;
  margin: 2px 8px;
  padding: 14px 10px;
  border: 1px solid red;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  width: 40%;
  margin: 0rem auto;
  background: #4331ed;
  &:hover {
    background: #2d1bdb;
    box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 10%),
      0px 1px 4px -1px rgb(0 0 0 / 10%), 0px 1px 7px 1px rgb(0 0 0 / 10%);
  }
`;
export const FormWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 320px;
  height: auto;
  margin-top: 2rem;
  padding: 20px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 768px) {
    width: 303px;
    padding: 10px 20px;
  }
`;
export const HeaderText = styled.div`
  font-size: 2rem;
  color: #5f6368;
  margin-top: 1.5rem;
  & > span {
    color: var(--button);
  }
`;

export const Rememberfield = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

export const NotAccount = styled.span`
  margin-top: -8px;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
`;
export const Loginothers = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
  gap: 30px;
  & > svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const LoginText = styled.div`
  font-size: 0.8rem;
  letter-spacing: 2px;
`;

export const LockIcon = styled.span`
  right: 15px;
  top: 14px;
  color: #777;
  padding: 2px;
  cursor: pointer;
  position: absolute;

  & > svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: rgb(233 98 220);
    border-radius: 2px;
  }
`;

export const Forget = styled.div``;
