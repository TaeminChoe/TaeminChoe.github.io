import react from "react";
import styled from "styled-components";
import Company from "../components/Company";
import data from "../db/data.json";

const Container = styled.div`
  background-color: #126782;

  article {
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
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
        <h1>Career</h1>
        {carriers.map((carrier, idx) => {
          return <Company key={`carrier_${idx}`} carrierInfo={carrier} />;
        })}
      </article>
    </Container>
  );
};

export default Career;
