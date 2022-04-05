import React, { useEffect, useState } from "react";
import data from "../db/data.json";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transition: transform 500ms;

  img {
    border-radius: 10px;
  }

  img:hover {
    transform: scale(1.08);
  }
`;

const Handle = styled.span`
  position: absolute;
  top: 0;
  height: 99%;
  z-index: 4;
  width: 4%;
  text-align: center;
  background: rgba(20, 20, 20, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
`;

export default function ImageSlider({ show = 4, imgs = data.color }) {
  const WINDOW_WIDTH = 100; // 창의 전체 크기 비율
  const BUTTON_WIDTH = 3; // slider 양 끝의 버튼 공간 비율
  const PADDING = 1; // 버튼과 이미지 사이의 공간 비율
  const STRIDE = WINDOW_WIDTH - (BUTTON_WIDTH * 2 + PADDING);
  const IMG_SIZE =
    (WINDOW_WIDTH - (BUTTON_WIDTH * 2 + PADDING * (show + 1))) / show;

  const [transX, setTransX] = useState(BUTTON_WIDTH + PADDING);
  const [leftBtn, setLeftBtn] = useState(false);
  const [rightBtn, setRightBtn] = useState(true);
  const [page, setPage] = useState(1);

  function toRight() {
    setTransX((prev) => prev - STRIDE);
    setPage(page + 1);
  }

  function toLeft() {
    setTransX((pre) => pre + STRIDE);
    setPage(page - 1);
  }

  const trans = {
    transform: `translate3d(${transX}%, 0px, 0px)`,
  };

  const imgSpec = {
    width: `${IMG_SIZE}%`,
    height: "auto",
    marginRight: "1%",
    transition: "transform 450ms",
  };

  useEffect(() => {
    if (page === 1) {
      setLeftBtn(false);
      setRightBtn(true);
    } else if (page === Math.ceil(imgs.length / show)) {
      setLeftBtn(true);
      setRightBtn(false);
    } else {
      setLeftBtn(true);
      setRightBtn(true);
    }
  }, [page]);

  return (
    <Container>
      <Handle
        onClick={toLeft}
        style={{ left: "-1%", visibility: leftBtn ? "visible" : "hidden" }}
      >
        {`<`}
      </Handle>
      <Wrapper>
        <Contents style={trans}>
          {imgs.map((img, idx) => {
            return <img key={idx} src={img} style={imgSpec} />;
          })}
        </Contents>
      </Wrapper>
      <Handle
        onClick={toRight}
        style={{ right: "-1%", visibility: rightBtn ? "visible" : "hidden" }}
      >
        {`>`}
      </Handle>
    </Container>
  );
}
