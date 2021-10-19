import React, { Component } from 'react';
import styled from 'styled-components';
import PlacelistDetail from '../PlacelistDetail/PlacelistDetail';

export default class Placelist extends Component {
  constructor() {
    super();
    this.state = {
      placelist: [],
    };
  }
  componentDidMount() {
    fetch('/data/placelist.json')
      .then(res => res.json())
      .then(result =>
        this.setState({
          placelist: result.product,
        })
      );
  }

  render() {
    const { placelist } = this.state;

    return (
      <Wrap>
        <PlacelistDetail placelist={placelist} />
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  position: absolute;
  width: 100%;

  /* right: 200px; */
  top: 50px;
  /* transform: translate(100px, 50px); */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;
