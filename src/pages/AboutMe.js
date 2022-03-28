import react from "react";
import styled from "styled-components";
import Card from "../components/Card";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import data from "../db/data.json";

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
  const { cards, introduces } = data.info;

  return (
    <Container>
      <h1>About Me</h1>
      <Contents {...animatedItem}>
        {cards.map((card, idx) => {
          return (
            <Card key={`card_${idx}`} title={card.title} content={card.value} />
          );
        })}
        {/*Todo : 자기소개 */}
      </Contents>
    </Container>
  );
};

export default AboutMe;
