import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  * {
    margin-right: 5px !important;
  }
  .spinner {
    animation: spin infinite 5s linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const StarPoint = ({ score = 0 }) => {
  console.log("score", score);

  const getStars = () => {
    const star = Array.from({ length: Math.floor(score) }).fill("star");
    const half = score % 1 === 0.5;

    if (half) return [...star, "half"];
    else return star;
  };

  return (
    <Container>
      {getStars().map((value, index) => {
        if (value === "star") {
          return (
            <FontAwesomeIcon
              key={`star_${index}`}
              icon={faStar}
              size="2x"
              className="spinner"
            />
          );
        } else if (value === "half") {
          return (
            <FontAwesomeIcon
              key={`star_${index}`}
              icon={faStarHalfStroke}
              size="2x"
              className="spinner"
            />
          );
        }
      })}
    </Container>
  );
};

export default StarPoint;
