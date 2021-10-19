import React, { Component } from 'react';
import styled from 'styled-components';

export default class Category extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categories: data.categories,
        });
      });
  }

  render() {
    const { categories } = this.state;

    return (
      <Container>
        {categories.map(({ namee, thumbnail, sub_categories }, idx) => {
          return (
            <Card key={idx}>
              <p>{namee}</p>
              <img alt="thumbnail" src={thumbnail} />
              <ButtonWrap>
                {sub_categories.map(({ name }, idx) => {
                  return (
                    <button type="button" key={idx}>
                      {name}
                    </button>
                  );
                })}
              </ButtonWrap>
            </Card>
          );
        })}
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0 50px;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 273px;
  margin-right: 20px;
  padding-top: 70px;

  & > p {
    margin-bottom: 10px;
    font-size: 19px;
    font-weight: bold;
    cursor: pointer;
  }

  img {
    height: 149px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    width: 132px;
    height: 40px;
    margin-bottom: 10px;
    font-size: 15px;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #e1e5e4;
    cursor: pointer;
    color: #282727;
  }
`;
