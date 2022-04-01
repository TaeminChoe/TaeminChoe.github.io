import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("imgs/Home.png");
  background-size: cover;
  opacity: 0.8;
  margin-top: 10vh;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    margin-bottom: 10px;
    font-family: "IBM Plex Sans KR", sans-serif !important;
  }
  h2 {
    font-size: 3rem;
  }
  .bar {
    border-bottom: 3px solid black;
    /* width: 40%; */
  }

  @media screen and (max-width: 768px) {
    margin-top: 0;
    height: auto;
  }

  @media screen and (max-width: 540px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const Logo = styled.h1`
  font-size: 100px !important;
`;

const Content = styled.p`
  font-size: 1.5rem;
  font-weight: 600;

  @media screen and (max-width: 549px) {
    font-size: 1rem;
  }
`;

const Home = ({ innerRef }) => {
  return (
    <Container
      ref={(el) => {
        innerRef.current[0] = el;
      }}
    >
      <article>
        <h1>최태민</h1>
        <h2>- 웹 개발자 포트폴리오 -</h2>
        <div className="bar" />
        <Content>
          안녕하십니까 차근차근 확실하게 나아가 성장하는 개발자 최태민입니다.
        </Content>
      </article>
    </Container>
  );
};

export default Home;
