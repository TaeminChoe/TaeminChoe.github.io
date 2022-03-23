import react, { useState } from "react";
import styled from "styled-components";
import {
  faJava,
  faPython,
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Skill from "../../components/Skill";

const Container = styled.div`
  background-color: #fb8500;
`;

const Title = styled.h1`
  color: black;
`;

const Categorys = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 110vh;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 350px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  background-color: #eeeeee;
  border: 1px solid black;
  box-shadow: 10px 5px 5px rgba(68, 68, 68, 0.2);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Skills = () => {
  const ICON_SIZE = "4x";
  return (
    <Container>
      <h1>Skills</h1>
      <Categorys>
        <Category>
          <Title>Front End</Title>
          <div>
            <Skill imgSrc={"imgs/skills/HTML.png"} size={ICON_SIZE} score={4} />
            <Skill imgSrc={"imgs/skills/CSS.png"} size={ICON_SIZE} score={4} />
          </div>
          <div>
            <Skill
              imgSrc={"imgs/skills/JavaScript.png"}
              size={ICON_SIZE}
              score={4}
            />
            <Skill
              imgSrc={"imgs/skills/TypeScript.png"}
              size={ICON_SIZE}
              score={4}
            />
          </div>
          <Skill imgSrc={"imgs/skills/React.png"} size={ICON_SIZE} score={4} />
          <Skill imgSrc={"imgs/skills/Scss.png"} size={ICON_SIZE} score={4} />
        </Category>
        <Category>
          <Title>Back End</Title>
          <Skill imgSrc={"imgs/skills/Python.png"} size={ICON_SIZE} score={3} />
          <Skill imgSrc={"imgs/skills/Java.png"} size={ICON_SIZE} score={3} />
        </Category>
        <Category>
          <Title>Version Control</Title>
          <Skill imgSrc={"imgs/skills/Git.png"} size={ICON_SIZE} />
          <Skill imgSrc={"imgs/skills/Github.png"} size={ICON_SIZE} />
          <Skill imgSrc={"imgs/skills/Svn.png"} size={ICON_SIZE} />
        </Category>
        <Category>
          <Title>Communication</Title>
          <Skill imgSrc={"imgs/skills/Jira.png"} size={ICON_SIZE} />
          <Skill imgSrc={"imgs/skills/Slack.png"} size={ICON_SIZE} />
          <Skill imgSrc={"imgs/skills/Notion.png"} size={ICON_SIZE} />
        </Category>
        <Category>
          <Title>Certification</Title>
          <Skill imgSrc={"imgs/skills/Oracle.png"} size={ICON_SIZE} />
        </Category>
      </Categorys>
    </Container>
  );
};

export default Skills;
