import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #eeeeee;
  color: black;
  /* padding: 10px;
  width: 200px;
  height: 100px;
  margin: 20px 80px; */

  transition: 200ms;
  font-size: 1.2rem;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 10px 5px 5px rgba(68, 68, 68, 0.2);
  width: calc(33% - 15px);
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    <Container>
      <h3>{title}</h3>
      <p>{content}</p>
    </Container>
  );
};

export default Card;
