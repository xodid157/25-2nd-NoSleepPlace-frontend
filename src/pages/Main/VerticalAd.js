import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default class SimpleSlider extends Component {
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  render() {
    return (
      <VerticalAd {...settings}>
        <ImgWrap>
          <img alt="adImage" src="/images/coupon.png" />
        </ImgWrap>
        <ImgWrap>
          <img alt="adImage" src="/images/findPlace.png" />
        </ImgWrap>
        <ImgWrap>
          <img alt="adImage" src="/images/friend.png" />
        </ImgWrap>
      </VerticalAd>
    );
  }
}

const VerticalAd = styled(Slider)`
  margin: 200px auto;
  width: 1150px;
  border-radius: 10px;
`;

const ImgWrap = styled.div`
  display: relative;
  height: 157px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    margin: 0 auto;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
