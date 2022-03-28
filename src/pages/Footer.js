import react from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #219ebc;
  padding: 0 100px;
  h6 {
    margin-bottom: 50px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <h3>읽어주셔서 감사합니다.</h3>
      <h3>연락처</h3>
      <h6>최태민 : 010-7192-4370 xoa28@naver.com</h6>
    </Container>
  );
};

export default Footer;
