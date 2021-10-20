import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    fetch(`http://10.58.1.124:8000/places?`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          categories: data.result,
        });
      });
  }
  render() {
    const { categories } = this.state;
    return (
      <SliderWrap>
        <h2>이 장소는 어때요?</h2>

        <SlideCategory {...settings}>
          {categories?.map(
            ({ id, place_name, category, capacity, price, parking, url }) => (
              <React.Fragment key={id}>
                <Thumbnail>
                  <img alt="places" src={url[0]} />
                </Thumbnail>
                <PlaceInfo>
                  <CategoryNLocal>
                    <p>{category}</p>
                    <div>
                      <button>
                        <i className="far fa-user" />
                        <span>{capacity.slice(-2, -1)}</span>
                      </button>
                      <button>
                        <i className="fas fa-car" />
                        <span> {parking.slice(3, 4)}</span>
                      </button>
                    </div>
                  </CategoryNLocal>
                  <InfoTitle>{place_name}</InfoTitle>
                  <p>{price}원</p>
                </PlaceInfo>
              </React.Fragment>
            )
          )}
        </SlideCategory>
      </SliderWrap>
    );
  }
}

const Thumbnail = styled.div`
  width: 278px;
  height: 180px;
  object-fit: cover;
`;
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
    height: 100%;
    object-fit: cover;
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
  height: 60px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e5e4;
`;

const SlideCategory = styled(Slider)`
  /* Arrows */
  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    padding: 0;
    cursor: pointer;
    border: 1px solid #c7c9cc;
    border-radius: 100%;
  }

  .slick-prev {
    top: -30px;
    left: 1070px;
  }

  .slick-prev:before {
    color: gray;
    content: '<';
  }

  .slick-next {
    right: 20px;
    top: -30px;
  }

  .slick-next:before {
    content: '>';
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
