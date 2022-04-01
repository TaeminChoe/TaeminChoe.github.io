import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStarHalfStroke,
  faStar as faStarEmpty,
} from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media screen and (max-width: 360px) {
    font-size: 0.7rem;
  }
`;

const StarPoint = ({ score = 0, color = "white", visible = "hidden" }) => {
  const getStars = () => {
    const star = Array.from({ length: Math.floor(score) }).fill("star");
    const half = score % 1 === 0 ? ["empty"] : ["half"];

    let stars = star.concat(half);
    if (stars.length < 5) {
      stars = stars.concat(
        Array.from({ length: 5 - stars.length }).fill("empty")
      );
    }

    return stars;
  };

  if (score === 0) return;

  return (
    <Container style={{ visibility: visible }}>
      {getStars().map((value, index) => {
        if (value === "star") {
          return (
            <FontAwesomeIcon
              key={`star_${index}`}
              icon={faStar}
              className="spinner"
              color={color}
            />
          );
        } else if (value === "half") {
          return (
            <FontAwesomeIcon
              key={`star_${index}`}
              icon={faStarHalfStroke}
              className="spinner"
              color={color}
            />
          );
        } else if (value === "empty") {
          return (
            <FontAwesomeIcon
              key={`star_${index}`}
              icon={faStarEmpty}
              className="spinner"
              color={color}
            />
          );
        }
      })}
    </Container>
  );
};

export default React.memo(StarPoint);
