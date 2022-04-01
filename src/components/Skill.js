import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarPoint from "./StarPoint";

const Keyword = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  img {
    cursor: pointer;

    @media screen and (max-width: 500px) {
      width: calc(100% - 4rem);
      padding: 0 2rem;
      height: auto;
      object-fit: cover;
    }
  }
`;

const Skill = ({ imgSrc = "", score = 0 }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(!hover);
  };

  return (
    <Keyword>
      <img
        src={imgSrc}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOver}
      />
      {score ? (
        <StarPoint
          score={score}
          color={"#ffd000"}
          visible={hover ? "visible" : "hidden"}
        />
      ) : null}
    </Keyword>
  );
};

export default React.memo(Skill);
