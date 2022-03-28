import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./pages/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Career from "./pages/Career";
import Footer from "./pages/Footer";

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
