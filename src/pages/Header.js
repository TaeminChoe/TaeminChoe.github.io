import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #eeeeee;
  color: black;
  position: fixed;
  z-index: 5;
  height: 10vh;
  width: calc(100%);

  @media screen and (max-width: 768px) {
    visibility: hidden;
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem !important;

    h1 {
      margin: 0 !important;
    }
  }
`;

const Logo = styled.h1`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  li {
    margin-right: 40px;
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

const Header = ({ scrollMove }) => {
  const handleOnClick = (e) => {
    scrollMove(Number(e.target.id));
  };

  return (
    <Container>
      <article>
        <Logo id="0" onClick={handleOnClick}>
          <img src="imgs/Logo.png" alt="로고" />
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
        </Menu>
        <Icons>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/TaeminChoe"
            >
              <img src="imgs/Git.png" alt="GitHub" />
            </a>
          </li>
        </Icons>
      </article>
    </Container>
  );
};

export default Header;
