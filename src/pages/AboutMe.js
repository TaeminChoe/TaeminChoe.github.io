import react from "react";
import styled from "styled-components";
import Card from "../components/Card";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import data from "../db/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  background-color: white;
  color: black;
  opacity: 0.8;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (max-width: 1280px) {
    max-width: 50rem;
    padding: 0 2rem;
    margin: 0 auto;
  }
`;

const AboutMe = ({ innerRef }) => {
  const animatedItem = useScrollFadeIn();
  const { cards, introduces } = data.info;

  return (
    <Container
      ref={(el) => {
        innerRef.current[1] = el;
      }}
    >
      <article>
        <h1>
          <FontAwesomeIcon icon={faBrush} />
          {` ABOUT ME`}
        </h1>
        <Contents {...animatedItem}>
          {cards.map((card, idx) => {
            return (
              <Card
                key={`card_${idx}`}
                title={card.title}
                content={card.value}
                icon={card.icon}
              />
            );
          })}
          {/*Todo : 자기소개 */}
        </Contents>
      </article>
    </Container>
  );
};

export default AboutMe;
