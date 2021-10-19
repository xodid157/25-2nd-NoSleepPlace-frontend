import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <Container>
      <Link to="place?">
        <img alt="banner" src="/images/studio.jpg" />
        <Sentence>
          <p>
            내가 찾던 촬영장소,
            <br />
            모두 여기에
          </p>
          <p>모든 장소 둘러보기 </p>
        </Sentence>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    filter: brightness(90%);
    object-fit: cover;
  }
`;

const Sentence = styled.div`
  position: absolute;
  top: 150px;
  left: 290px;
  z-index: 9;

  p {
    display: block;
    line-height: 40px;
    color: white;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 1.5px;
    z-index: 999;

    &:last-child {
      font-size: 14px;
    }
  }
`;
