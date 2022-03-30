import react, { useState } from "react";
import styled from "styled-components";
import Skill from "../components/Skill";
import data from "../db/data.json";

const Container = styled.div`
  background-color: #fb8500;
`;

const Title = styled.h2`
  color: black;
`;

const Categorys = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: baseline;
  align-items: center;
  height: 100vh;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: calc(33% - 30px);
  margin: 5px;
  padding: 10px;
  background-color: #eeeeee;
  border: 1px solid black;
  box-shadow: 10px 5px 5px rgba(68, 68, 68, 0.2);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const Skills = ({ innerRef }) => {
  const ICON_SIZE = "4x";
  const { skills } = data;

  return (
    <Container
      ref={(el) => {
        innerRef.current[2] = el;
      }}
    >
      <article>
        <h1>Skills</h1>
        <Categorys>
          {skills.map((skill, idx) => {
            return (
              <Category key={`skill_${idx}`}>
                <Title>{skill.title}</Title>
                {skill.keywords.map((keyword, key) => {
                  return (
                    <Skill
                      key={`keyword_${key}`}
                      imgSrc={keyword.src}
                      size={ICON_SIZE}
                      score={keyword.score}
                    />
                  );
                })}
              </Category>
            );
          })}
        </Categorys>
      </article>
    </Container>
  );
};

export default Skills;
