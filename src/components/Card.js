import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  background-color: #eeeeee;
  color: black;
  font-size: 1.2rem;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 10px 5px 5px rgba(68, 68, 68, 0.2);
  margin-bottom: 2rem;
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: calc(33% - 15px);

  .icon {
    width: calc(40% - 4rem);
    font-size: 3rem;
    margin: 0 2rem;
  }

  .contents {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    & > div {
      margin: 10px;
      font-weight: 600;

      &:nth-child(1) {
        font-size: 1.5rem;
      }
      &:nth-child(2) {
        text-align: left;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px) {
    width: calc(50% - 15px);
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 15px);
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    .icon {
      width: calc(40% - 2rem);
      font-size: 2rem;
      margin: 0 1rem;
    }
  }
`;

const Card = ({ title, content, icon }) => {
  let info = [content];
  if (content.length > 15) {
    info = content.split(" ");
  }
  return (
    <Container>
      <div className="icon">
        <FontAwesomeIcon icon={Icon[icon]} />
      </div>
      <div className="contents">
        <div>{title}</div>
        <div>
          {info.map((value) => {
            return <div>{value}</div>;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Card;
