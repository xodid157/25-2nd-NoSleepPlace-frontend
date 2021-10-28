import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Place({ id, title }) {
  return (
    <Link to={`/places?menu=${id}`} style={{ textDecoration: 'none' }}>
      <Wrap>
        <Title style={{ textDecoration: 'none' }}>{title}</Title>
      </Wrap>
    </Link>
  );
}

const Wrap = styled.div`
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
