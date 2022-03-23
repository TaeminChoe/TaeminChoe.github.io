import react from "react";
import styled from "styled-components";
import Project from "../../components/Project";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #023047;
  height: 100vh;
`;

const Projects = () => {
  return (
    <Container>
      <h1>Projects</h1>
      <Project />
    </Container>
  );
};

export default Projects;
