import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  background-color: #eeeeee;
  color: black;
  height: 10vh;
  width: calc(100vw - 200px);
  z-index: 1;
`;

const Logo = styled.h1`
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: tomato;
    transition: all 0.2s ease-in-out;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  font-size: 20px;
  li {
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: tomato;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const Icons = styled.ul`
  list-style: none;
  li {
    font-size: 20px;
    a {
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      color: black;
      text-decoration: none;
      outline: none;
      &:hover {
        color: tomato;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
      }
      &:active {
        color: black;
        text-decoration: none;
      }
    }
  }
`;

const scrollIndex = [0, 323, 323, 200, 300, 400, 500];

const Header = () => {
  const handleOnClick = (e) => {
    const id = Number(e.target.id);
    const height = window.innerHeight;
    window.scroll({
      top: scrollIndex[id],
      // top: id * height * 0.8,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Logo id="0" onClick={handleOnClick}>
        LOGO
      </Logo>
      <Menu>
        <li id="0" onClick={handleOnClick}>
          Home
        </li>
        <li id="1" onClick={handleOnClick}>
          About me
        </li>
        <li id="2" onClick={handleOnClick}>
          Skills
        </li>
        <li id="3" onClick={handleOnClick}>
          Projects
        </li>
        <li id="4" onClick={handleOnClick}>
          Career
        </li>
        <li id="5" onClick={handleOnClick}>
          Activity
        </li>
        <li id="6" onClick={handleOnClick}>
          Archiving
        </li>
      </Menu>
      <Icons>
        <li>
          <a target="_blank" href="https://github.com/TaeminChoe">
            git
          </a>
        </li>
      </Icons>
    </Container>
  );
};

export default Header;
