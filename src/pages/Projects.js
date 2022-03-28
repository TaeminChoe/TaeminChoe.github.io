import react from "react";
import styled from "styled-components";
import Project from "../components/Project";
import data from "../db/data.json";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #023047;
`;

const Projects = () => {
  const { projects } = data;
  return (
    <Container>
      <h1>Projects</h1>
      {projects.map((project, idx) => {
        return <Project key={`project_${idx}`} projectInfo={project} />;
      })}
    </Container>
  );
};

export default Projects;
