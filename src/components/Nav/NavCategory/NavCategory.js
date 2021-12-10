import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
function NavCategory({ categotyList, handleCategotyButton }) {
  const handleSearchCategory = e => {
    if (e === '주택') {
      return 1;
    } else if (e === '아파트') {
      return 2;
    } else if (e === '빈티지') {
      return 3;
    } else if (e === '키친') {
      return 4;
    } else if (e === '카페') {
      return 5;
    } else if (e === '식당') {
      return 6;
    } else if (e === '편의점') {
      return 7;
    } else if (e === '스포츠') {
      return 8;
    }
    return 0;
  };

  return (
    <NavCategoryBox>
      <CategoryContent>
        {categotyList.map((content, index) => (
          <ContentList key={index}>
            <Link to={`/places?menu=${content.id}`}>
              <li onClick={handleCategotyButton}>{content.title}</li>
            </Link>
            <ItemBox>
              {content.categoryList.map((content, index) => (
                <Link
                  to={`/places?category=${handleSearchCategory(content)}`}
                  key={index}
                >
                  <span onClick={handleCategotyButton}>{content}</span>
                </Link>
              ))}
            </ItemBox>
          </ContentList>
        ))}
      </CategoryContent>
    </NavCategoryBox>
  );
}

export default NavCategory;

const NavCategoryBox = styled.div`
  position: fixed;
  top: 5em;
  right: 0;
  left: 0;
  z-index: 20;
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
  a {
    margin: 0.3em 0;
    text-decoration: none;
  }
`;

const ContentList = styled.ul`
  margin: 0.4em 0 2em;
  a {
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
