import react from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faPython } from "@fortawesome/free-brands-svg-icons";
import StarPoint from "../../components/StarPoint";

const Container = styled.div`
  background-color: #fb8500;
`;

const Categorys = styled.div`
  display: flex;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    * {
      margin-right: 20px;
    }
  }
`;

const Skills = () => {
  return (
    <Container>
      <h1>Skills</h1>
      <Categorys>
        <Category>
          <header>
            <h2>Front End</h2>
          </header>
        </Category>
        <Category>
          <header>
            <h2>Back End</h2>
          </header>
          <article>
            <FontAwesomeIcon icon={faPython} size="4x" />
            <h4>Python</h4>
            <StarPoint score={3.5} />
          </article>
          <article>
            <FontAwesomeIcon icon={faJava} size="4x" />
            <h4>JAVA</h4>
            <StarPoint score={3} />
          </article>
        </Category>
      </Categorys>
    </Container>
  );
};

export default Skills;
