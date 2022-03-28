import react from "react";
import styled from "styled-components";
import Company from "../components/Company";
import data from "../db/data.json";

const Container = styled.div`
  background-color: #126782;
`;

const Career = () => {
  const { carriers } = data;
  return (
    <Container>
      <h1>Career</h1>
      {carriers.map((carrier, idx) => {
        return <Company key={`carrier_${idx}`} carrierInfo={carrier} />;
      })}
    </Container>
  );
};

export default Career;
