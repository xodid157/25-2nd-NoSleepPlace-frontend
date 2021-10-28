import React, { Component } from 'react';
import Banner from './Banner';
import Category from './Category';
import styled from 'styled-components';
import Suggest from './Suggest';
import VerticalAd from './VerticalAd';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Banner />
        <Container>
          <Category />
          <GoAllProduct>
            <Link to="/places">
              <button>
                아워플레이스 모든 장소 보기
                <i className="fas fa-arrow-right" />
              </button>
            </Link>
          </GoAllProduct>
          <Suggest />
          <VerticalAd />
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

const GoAllProduct = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;

  button {
    width: 280px;
    height: 60px;
    background-color: rgb(245, 249, 255);
    border: none;
    border-radius: 8px;
    font-size: 16px;
    color: #0554f0;
    cursor: pointer;

    i {
      margin-left: 10px;
    }
  }
`;
