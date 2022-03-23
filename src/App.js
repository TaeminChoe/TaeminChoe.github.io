import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import AboutMe from "./pages/aboutMe/AboutMe";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Career from "./pages/career/Career";
import Footer from "./pages/footer/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Source Sans Pro", sans-serif;
  color: #eeeeee;
  & > div:nth-child(n + 2) {
    padding: 0 300px;
    /* height: 80vh; */
  }

  h1 {
    font-size: 3rem;
  }
`;

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Career />
      <Footer />
    </AppContainer>
  );
}

export default App;
