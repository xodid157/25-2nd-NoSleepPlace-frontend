import React, { Component } from 'react';
import styled from 'styled-components';
import Place from './Place';
import { withRouter, Link } from 'react-router-dom';

class PlacelistDetail extends Component {
  render() {
    const { placelist, match } = this.props;

    const ha = placelist.filter(place => place.id === Number(match.params.id));
    const ha2 = Object.assign({}, ha);
    return (
      <div>
        <Wrap>
          {placelist.map(place => (
            <Place
              key={place.id}
              id={place.id}
              title={place.title}
              content={place.content}
            />
          ))}
        </Wrap>
        <Link to="/placelist" style={{ textDecoration: 'none' }}>
          {Number(match.params.id) === ha2[0]?.id && (
            <Forth>
              {placelist[ha2[0].id - 1].content.map((el, idx) => (
                <Fifth key={idx}>{el}</Fifth>
              ))}
            </Forth>
            // dfdf
          )}
        </Link>
      </div>
    );
  }
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  padding-left: 50px;
`;

const Forth = styled.div`
  padding-left: 40px;
  margin: 3px;
  display: flex;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  font-size: 15px;
`;

const Fifth = styled.div`
  padding: 5px;
  margin: 10px;
  cursor: pointer;
`;

export default withRouter(PlacelistDetail);
