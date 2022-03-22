import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #ffb703;
  margin-top: 10vh;
`;

const Logo = styled.h1`
  font-size: 100px !important;
`;

const Content = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Home = () => {
  return (
    <Container>
      <Logo>MAIN IMAGE</Logo>
      <Content>간단한 자개소개글</Content>
    </Container>
  );
};

export default Home;
