import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeroBannerContainer,
  HeroBannerWrapper,
  HeroBannerLeft,
  HeroBannerRight,
  ImageContainer,
  BannerDetails,
  BannerTitle,
} from "./herobannerstyle";
import Layout from "../layout/Layout";
import { Button } from "../../styles/commanStyle";
const HeroBanner = () => {
  const nav = useNavigate();
  return (
    <>
      <HeroBannerContainer>
        <Layout>
          <HeroBannerWrapper>
            <HeroBannerLeft>
              <BannerDetails>
                <span>Latest items</span>
                <BannerTitle>Fashion Trending</BannerTitle>
                <BannerTitle>
                  <span>Great Collection</span>
                </BannerTitle>
                <Button
                  onClick={() => {
                    nav("/");
                  }}
                  style={{ width: "22%", padding: "25px" }}
                >
                  Shop Now
                </Button>
              </BannerDetails>
            </HeroBannerLeft>
            <HeroBannerRight>
              <ImageContainer>
                <img src="/images/home-img.png" alt="" />
              </ImageContainer>
            </HeroBannerRight>
          </HeroBannerWrapper>
        </Layout>
      </HeroBannerContainer>
    </>
  );
};

export default HeroBanner;
