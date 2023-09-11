import React from "react";
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import styled from "styled-components";
const RatingConrainer = styled.div`
  display: flex;
`;
const Review = styled.div`
  margin-left: 7px;
  margin-top: -3px;
`;
const Rating = ({ value, text }) => {
  return (
    <RatingConrainer className="rating">
      <span style={{ color: "#FFA41C" }}>
        {value >= 1 ? (
          <BiSolidStar />
        ) : value >= 0.5 ? (
          <BiSolidStarHalf />
        ) : (
          <BiSolidStar />
        )}
      </span>
      <span style={{ color: "#FFA41C" }}>
        {value >= 2 ? (
          <BiSolidStar />
        ) : value >= 1.5 ? (
          <BiSolidStarHalf />
        ) : (
          <BiSolidStar />
        )}
      </span>
      <span style={{ color: "#FFA41C" }}>
        {value >= 3 ? (
          <BiSolidStar />
        ) : value >= 2.5 ? (
          <BiSolidStarHalf />
        ) : (
          <BiSolidStar />
        )}
      </span>
      <span style={{ color: "#FFA41C" }}>
        {value >= 4 ? (
          <BiSolidStar />
        ) : value >= 3.5 ? (
          <BiSolidStarHalf />
        ) : (
          <BiSolidStar />
        )}
      </span>
      <span style={{ color: "#FFA41C" }}>
        {value >= 5 ? (
          <BiSolidStar />
        ) : value >= 4.5 ? (
          <BiSolidStarHalf />
        ) : (
          <BiSolidStar />
        )}
      </span>
      <Review>{text && text}</Review>
    </RatingConrainer>
  );
};

export default Rating;
