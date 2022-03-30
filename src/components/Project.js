import react from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: #eeeeee;
  border: 5px solid #ffdd00;
  border-radius: 10px;
  width: 80%;
  margin-bottom: 50px;

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .img {
      width: calc(100% - 60px);
      margin: 0 30px;
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;

      .detail,
      .more {
        padding: 0 10px;
        width: 80%;
        text-align: left;
      }
      .detail {
        border-bottom: 2px solid black;
        padding-bottom: 20px;
        margin-bottom: 20px;

        span {
          background-color: black;
          color: white;
          padding: 5px;
          cursor: pointer;
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
      <h3>{title}</h3>
      <div className="contents">
        <div className="img">
          <ImageSlider show={1} imgs={src} />
        </div>
        <div className="description">
          <div className="detail">
            <h6>{subTitle}</h6>
            <p>{description}</p>
            <a href={gitUrl} target="_blank">
              <span> 자세히 보기... </span>
            </a>
          </div>
          <div className="more">
            <ul>
              <li>주요 기능 : {functions.map((value) => value).join(", ")}</li>
              <li>
                link : <a href={link}>https://taeminchoe.github.io/</a>
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
