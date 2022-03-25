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
    width: 100%;

    .img {
      width: calc(100% - 60px);
      margin: 0 30px;
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: baseline;
      align-items: flex-start;
      width: 100%;

      .detail {
        padding: 0 10px;
        width: 80%;
        border-bottom: 2px solid black;
      }
    }
  }

  ul {
    list-style: none;
  }
`;

const Project = () => {
  return (
    <Container>
      <h3>Project 제목</h3>
      <div className="contents">
        <div className="img">
          <ImageSlider show={1} />
        </div>
        <div className="description">
          <div className="detail">
            <h6>제목을 간단히 설명하는 부제</h6>
            <p>이 프로젝트는....</p>
            <span> 자세히 보기 </span>
          </div>
          <div className="more">
            <ul>
              <li>
                주요 기능
                <ul>
                  <li>비동기 API 처리</li>
                </ul>
              </li>
              <li>URL : www. ㅁㄴㅇ</li>
              <li>keywords : </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
