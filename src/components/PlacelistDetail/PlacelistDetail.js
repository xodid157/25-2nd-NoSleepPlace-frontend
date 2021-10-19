import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Place from './Place';
import queryString from 'query-string';
import {
  withRouter,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useLocation } from 'react-router';
import Listpage from '../Listpage/Listpage';

function PlacelistDetail({ placelist, handleGotoSecond, match }) {
  const location = useLocation();
  const menuId = queryString.parse(location.search).menu;
  const categoryId = queryString.parse(location.search).category;

  const qs = menuId ? `?menu=${menuId}` : '?';

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginTop: '40px' }} />

      <Wrap>
        {placelist.map(place => (
          <Place
            handleGotoSecond={handleGotoSecond}
            key={place.id}
            id={place.id}
            title={place.title}
          />
        ))}
      </Wrap>

      <div>
        <CategoryDetail>
          {placelist[(menuId || 1) - 1].content.map((el, idx) => {
            return (
              <div key={idx}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/places${qs}&category=${el.categoryId}`}
                >
                  <span>{el.name}</span>
                </Link>
              </div>
            );
          })}
        </CategoryDetail>
        <Wrapper>
          <Date>
            <div>날짜</div>
            <div>인원</div>
            <div>가격</div>
            <div>지역</div>
          </Date>
          <Sort>
            <div>추천순</div>
          </Sort>
        </Wrapper>

        <Listpage categoryId={categoryId} menuId={menuId} />
      </div>
    </div>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 10px 127px;
`;

const Date = styled.div`
  display: flex;
  gap: 10px;
  div {
    width: 60px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    padding: 10px;
    cursor: pointer;
  }
`;

const Sort = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 10px;
  margin-right: 120px;
  margin-left: 825px;
  cursor: pointer;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  padding-left: 120px;
`;

const CategoryDetail = styled.div`
  padding: 15px 0 15px 127px;
  margin: 10px 0px 10px 0px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  font-size: 15px;
`;

export default withRouter(PlacelistDetail);
