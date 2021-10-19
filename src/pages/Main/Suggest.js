import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    return (
      <SliderWrap>
        <h2>이 장소는 어때요?</h2>

        <SlideCategory {...settings}>
          {IMAGE_LIST.map(({ id, src }) => (
            <React.Fragment key={id}>
              <img alt="places" src={src} />
              <PlaceInfo>
                <CategoryNLocal>
                  <p>카페.서울</p>
                  <div>
                    <button>
                      <i className="far fa-user" />
                      <span> 9</span>
                    </button>
                    <button>
                      <i className="far fa-user" />
                      <span> 9</span>
                    </button>
                  </div>
                </CategoryNLocal>
                <InfoTitle>[용산]레트로 빈티지 무드의 특색있는 카페</InfoTitle>
                <p>80,000원</p>
              </PlaceInfo>
            </React.Fragment>
          ))}
        </SlideCategory>
      </SliderWrap>
    );
  }
}

const SliderWrap = styled.div`
  margin: 0 50px 80px;

  h2 {
    margin-bottom: 18px;
    font-size: 24px;
    font-weight: bold;
  }

  img {
    width: 270px;
    border-radius: 10px;
  }
`;

const PlaceInfo = styled.div`
  margin-top: 10px;
  width: 270px;
  color: #282727;
`;

const CategoryNLocal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 13px;

  button {
    font-size: 10px;
    margin-left: 4px;
    padding: 0 2px;
    border: 1px solid #e1e5e4;
    background-color: transparent;

    span {
      font-size: 12px;
    }
  }
`;

const InfoTitle = styled.div`
  padding-bottom: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e5e4;
`;

const SlideCategory = styled(Slider)`
  /* Arrows */
  .slick-prev,
  .slick-next {
    width: 40px; // fdsfds fdsfdsfdsfdsfdsfdsfdsf ds fds fds f
    height: 40px; // fdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfds
    padding: 0;
    cursor: pointer;
    border: 1px solid #c7c9cc; // ffffffdsfdsafdsq버튼보더fdsfdsfdsfs
    border-radius: 100%;
  }

  .slick-prev {
    top: -30px;
    left: 1070px;
  }

  .slick-prev:before {
    color: gray;
    content: '<'; // fdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsdfdsfdsfds
  }

  .slick-next {
    right: 20px; //fdsafdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfds
    top: -30px;
  }

  .slick-next:before {
    content: '>'; // fdafdafdafdsafdsafdsafdafdsfdsfdsfdsfdsfdsfsd
    color: gray;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const IMAGE_LIST = [
  {
    id: 0,
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80',
  },
];
