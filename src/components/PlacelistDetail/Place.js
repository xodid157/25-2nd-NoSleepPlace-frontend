import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Place extends Component {
  render() {
    const { id, title } = this.props;

    return (
      <Link to={`/placelist/${id}`} style={{ textDecoration: 'none' }}>
        <Wrap>
          <Title style={{ textDecoration: 'none' }}>{title}</Title>
        </Wrap>
      </Link>
    );
  }
}

const Wrap = styled.div`
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// width,height %%%%%
// margin padding :  em, rem, vh
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0px 4px;
  display: flex;
  font-size: 15px;
  font-weight: 700;
  color: #aeb3b8;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export default Place;
