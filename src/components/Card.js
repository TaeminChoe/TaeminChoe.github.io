import React from "react";
import styled from "styled-components";

const CardCotainer = styled.div`
  background-color: #eeeeee;
  color: black;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 10px 5px 5px rgba(68, 68, 68, 0.2);
  transition: 200ms;
  width: 200px;
  height: 100px;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 80px;
  cursor: pointer;

  h3,
  p {
    margin: 10px;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const Card = ({ title, content }) => {
  return (
    <CardCotainer>
      <h3>{title}</h3>
      <p>{content}</p>
    </CardCotainer>
  );
};

export default Card;
