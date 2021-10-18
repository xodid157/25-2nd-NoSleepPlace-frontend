import React, { Component } from 'react';
import styled from 'styled-components';

export default class NavCategory extends Component {
  render() {
    const { categotyList } = this.props;

    return (
      <NavCategoryBox>
        <CategoryContent>
          {categotyList.map((content, index) => (
            <ContentList key={index}>
              <li>{content.title}</li>
              <ItemBox>
                {content.categoryList.map((content, index) => (
                  <span key={index}>{content}</span>
                ))}
              </ItemBox>
            </ContentList>
          ))}
        </CategoryContent>
      </NavCategoryBox>
    );
  }
}

const NavCategoryBox = styled.div`
  position: fixed;
  top: 5em;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding-top: 0.65em;
  background-color: white;
`;

const CategoryContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1160px;
  font-size: 1.25em;
`;

const ContentList = styled.ul`
  margin: 0.4em 0 2em;

  li {
    margin: 0 0.2em 0.5em 0.5em;
    padding: 0.4em 3em 0.3em 0;
    font-weight: 600;
    color: rgb(69, 75, 80);
    cursor: pointer;

    &:hover {
      background-color: #f5f7f8;
    }
  }
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.7em;

  span {
    margin: 0.4em 0.2em 0 0.8em;
    padding: 0.438em 3em 0.313em 0;
    color: #454b50;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: #f5f7f8;
    }
  }
`;
