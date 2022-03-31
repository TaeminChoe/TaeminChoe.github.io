import React, { useRef } from "react";
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
  color: #eeeeee;
  h1 {
    font-size: 3rem;
  }

  & > div > article {
    max-width: 72.25rem;
    padding: 4rem 2rem;
    margin: 0 auto;

    & > h1 {
      margin-top: 0;
      font-family: "Black Han Sans", sans-serif;
      font-weight: 400;
    }
  }
`;

function App() {
  const scroll = useRef([]);

  const scrollMove = (id) => {
    const { scrollY, innerHeight } = window;
    const height = scroll.current[id].getBoundingClientRect().y;
    window.scroll({
      top: id === 0 ? 0 : scrollY + height - innerHeight * 0.1,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <AppContainer className="App">
      <Header scrollMove={scrollMove} />
      <Home innerRef={scroll} />
      <AboutMe innerRef={scroll} />
      <Skills innerRef={scroll} />
      <Projects innerRef={scroll} />
      <Career innerRef={scroll} />
      <Footer />
    </AppContainer>
  );
}

export default App;
