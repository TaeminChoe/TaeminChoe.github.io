import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #ffb703;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 3rem;
  }
  .bar {
    border-bottom: 3px solid black;
    width: 40%;
  }
`;

const Logo = styled.h1`
  font-size: 100px !important;
`;

const Content = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Home = ({ innerRef }) => {
  return (
    <Container
      ref={(el) => {
        innerRef.current[0] = el;
      }}
    >
      <h1>최태민</h1>
      <h2>- 웹 개발자 포트폴리오 -</h2>
      <div className="bar" />
      <Content>
        안녕하십니까 차근차근 확실하게 나아가 성장하는 개발자 최태민입니다.
      </Content>
    </Container>
  );
};

export default Home;
