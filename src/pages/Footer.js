import react from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #219ebc;
  h6 {
    margin-bottom: 50px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <h3>읽어주셔서 감사합니다.</h3>
    </Container>
  );
};

export default Footer;
