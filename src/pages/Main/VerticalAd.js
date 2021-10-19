import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function (currentSlide, nextSlide) {},
      afterChange: function (currentSlide) {},
    };
    return (
      <div>
        <SlideWrap>
          <SlideAd {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </SlideAd>
        </SlideWrap>
      </div>
    );
  }
}

const SlideWrap = styled.div`
  margin: 150px 70px 150px 50px;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-color: pink;

    h3 {
      font-size: 20px;
    }
  }
`;

const SlideAd = styled(Slider)``;
