import react from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: #e6e7d9;
  /* border: 5px solid black; */
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgba(68, 68, 68, 0.2);
  width: 60rem;
  margin-bottom: 50px;

  h2 {
    margin: 2rem 0;
  }

  @media screen and (max-width: 1280px) {
    width: 60%;
  }

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .img {
      width: 90%;
      /* margin: 0 50px; */
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;

      .detail,
      .more {
        width: 100%;
        text-align: left;
      }
      .detail {
        border-bottom: 2px solid black;
        padding-bottom: 2rem;
        margin-bottom: 0.5rem;

        & > * {
          margin: 2rem 0;
        }

        a {
          background-color: black;
          color: white;
          padding: 10px;
          cursor: pointer;
          margin-bottom: 2rem;
        }
      }
      .more {
        ul {
          padding-left: 0;
        }
      }
    }
  }

  ul {
    list-style: none;
  }
`;

const Project = ({ projectInfo }) => {
  const {
    title,
    src,
    subTitle,
    description,
    gitUrl,
    functions,
    keywords,
    link,
  } = projectInfo;

  return (
    <Container>
      <h2>{title}</h2>
      <div className="contents">
        <div className="img">
          <ImageSlider show={1} imgs={src} />
        </div>
        <div className="description">
          <div className="detail">
            <h4>{subTitle}</h4>
            <p>{description}</p>
            <a href={gitUrl} target="_blank">
              <span> 자세히 보기... </span>
            </a>
          </div>
          <div className="more">
            <ul>
              <li>주요 기능 : {functions.map((value) => value).join(", ")}</li>
              <li>
                link :{" "}
                <a target="_blank" href={link}>
                  https://taeminchoe.github.io/
                </a>
              </li>
              <li>keywords : {keywords.map((value) => value).join(", ")}</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
