import react from "react";
import styled from "styled-components";
import Company from "../components/Company";
import data from "../db/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  background-color: #eeeeee;
  color: black;

  article {
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const Career = ({ innerRef }) => {
  const { carriers } = data;

  return (
    <Container
      ref={(el) => {
        innerRef.current[4] = el;
      }}
    >
      <article>
        <h1>
          <FontAwesomeIcon icon={faBrush} />
          {` CAREER`}
        </h1>
        {carriers.map((carrier, idx) => {
          return <Company key={`carrier_${idx}`} carrierInfo={carrier} />;
        })}
      </article>
    </Container>
  );
};

export default Career;
