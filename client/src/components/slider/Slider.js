import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import { Carousel } from "antd";
import {slide} from "../../data/SliderData";

const MovieSlideContainer = styled.div`
  width: 100%;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SliderBox = styled.div`
  width: 100%;
  height: 340px;
  overflow: hidden;
  border-radius: 0 0 15px 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;
const ImageSlider = styled.div`
  width: 100%;
  height: 440px;
  border-radius: 0 0 15px 15px;
  cursor: pointer;
  & > img {
    border-radius: 0 0 15px 15px;
    background-position: center;
    background-size: cover;
    white-space: nowrap;
    transition: ease-in 2500ms;
    object-fit: contain;
    animation: duration(200);
  }
`;

const Slider = () => {
  return (
    <>
      <MovieSlideContainer>
        <Layout>
          <SliderContainer>
            <SliderBox>
              <Carousel autoplay autoplaySpeed={3000}>
                {slide.map((item) => {
                  return (
                    <ImageSlider key={item.id}>
                      <img
                        src={item.url}
                        key={item.id}
                        alt=""
                        className="IMG"
                      />
                    </ImageSlider>
                  );
                })}
              </Carousel>
            </SliderBox>
          </SliderContainer>
        </Layout>
      </MovieSlideContainer>
    </>
  );
};

export default Slider;
