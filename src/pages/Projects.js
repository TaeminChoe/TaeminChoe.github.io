import react from "react";
import styled from "styled-components";
import Project from "../components/Project";
import data from "../db/data.json";

const Container = styled.div`
  background-color: #023047;

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Projects = ({ innerRef }) => {
  const { projects } = data;
  return (
    <Container
      ref={(el) => {
        innerRef.current[3] = el;
      }}
    >
      <article>
        <h1>Projects</h1>
        {projects.map((project, idx) => {
          return <Project key={`project_${idx}`} projectInfo={project} />;
        })}
      </article>
    </Container>
  );
};

export default Projects;
