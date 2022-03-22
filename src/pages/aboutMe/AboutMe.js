import react from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const Container = styled.div`
  background-color: #fd9e02;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const AboutMe = () => {
  const animatedItem = useScrollFadeIn();

  return (
    <Container>
      <h1>About Me</h1>
      <Contents {...animatedItem}>
        <Card title="이름" content="최태민" />
        <Card title="생년월일" content="96.06.28" />
        <Card title="거주지" content="경기도 과천시" />
        <Card title="연락처" content="010-7192-4370" />
        <Card title="E-mail" content="xoa28@naver.com" />
        <Card title="학력" content="군산대학교 소프트웨어융합공학과" />
      </Contents>
    </Container>
  );
};

export default AboutMe;
