import react from "react";
import styled from "styled-components";

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
  height: 60vh;

  .contents {
    display: flex;
    width: 100%;
    .img {
      background-color: yellow;
      width: 100%;
      height: 400px;
      margin: 15px;
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      .detail {
        padding: 0 10px;
        width: 80%;
        border-bottom: 2px solid black;
      }
    }
  }
`;

const Project = () => {
  return (
    <Container>
      <h3>Project 제목</h3>
      <div className="contents">
        <div className="img">
          <div>1</div>
        </div>
        <div className="description">
          <div className="detail">
            <h6>제목을 간단히 설명하는 부제</h6>
            <p>이 프로젝트는....</p>
          </div>
          <div className="more"></div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
