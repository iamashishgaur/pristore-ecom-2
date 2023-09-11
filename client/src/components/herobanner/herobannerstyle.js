import styled from "styled-components";

export const HeroBannerContainer = styled.div`
  width: 100%;

  /* height: 400px; */
  padding: 30px 0px;
`;
export const HeroBannerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const HeroBannerLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 4rem;
`;
export const HeroBannerRight = styled.div`
  width: 100%;
  height: 100%;
`;
export const ImageContainer = styled.div``;
export const BannerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  & > span {
    font-size: 12px;
  }
`;
export const BannerTitle = styled.div`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.8px;
  & > span {
    font-size: 3.5rem;
    font-weight: 600;
    letter-spacing: -0.8px;
    color: var(--button);
  }
`;
// export const HeroBannerContainer = styled.div``;
// export const HeroBannerContainer = styled.div``;
