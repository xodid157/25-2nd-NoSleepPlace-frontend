import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import NavMain from './NavMain/NavMain';
import NavCategory from './NavCategory/NavCategory';
import SearchModal from './SearchModal/SearchModal';
import Login from '../Login/Login';

function Nav(history) {
  const [isCategoryButton, setIsCategoryButton] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isInfoBytton, setIsInfoBytton] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const [categotyList, setCategotyList] = useState([]);
  const [kakaoList, setKakaoList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [liveSearch, setLiveSearch] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetch('/data/navListData.json')
      .then(res => res.json())
      .then(result => setCategotyList(result));

    fetch(`http://52.79.51.199:8000/places?`)
      .then(res => res.json())
      .then(res => setLiveSearch(res.result));
  }, []);

  const handleCategotyButton = () => {
    setIsCategoryButton(!isCategoryButton);
    setIsSearch(false);
  };

  const handleSerchButton = () => {
    setIsSearch(!isSearch);
    setIsCategoryButton(false);
  };

  const handleInfoBytton = () => {
    setIsInfoBytton(!isInfoBytton);
  };

  const handleLogInButton = () => {
    setIsVisible(!isVisible);
  };

  const handleLogInBox = () => {
    setIsLogIn(!isLogIn);
  };

  const kakaoLogOut = () => {
    window.localStorage.clear();
    setIsLogIn(!isLogIn);
    setIsInfoBytton(!isInfoBytton);
  };

  const handleChange = e => {
    const { value } = e.target;
    setUserInput(value);
  };

  const handleEnter = e => {
    const { value } = e.target;
    if (e.key === 'Enter') {
      setIsSearch(!isSearch);
      setIsCategoryButton(false);
      setUserInput(value);
      history.push(`/places?keyword=${value}`);
    }
  };

  const kakaoLogIn = () => {
    fetch('http://52.79.51.199:8000/users/profile', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => setKakaoList(res.result));
  };

  const filterSearch = liveSearch.filter(content => {
    return content.place_name.toLowerCase().includes(userInput.toLowerCase());
  });

  return (
    <>
      <NavMain
        handleCategotyButton={handleCategotyButton}
        handleSerchButton={handleSerchButton}
        isLogIn={isLogIn}
        kakaoList={kakaoList}
        isInfoBytton={isInfoBytton}
        handleInfoBytton={handleInfoBytton}
        handleLogInButton={handleLogInButton}
        kakaoLogOut={kakaoLogOut}
      />
      {isCategoryButton && (
        <NavCategory
          categotyList={categotyList}
          handleCategotyButton={handleCategotyButton}
        />
      )}
      {isSearch && (
        <SearchModal
          handleChange={handleChange}
          filterSearch={filterSearch}
          userInput={userInput}
          handleSerchButton={handleSerchButton}
          handleEnter={handleEnter}
        />
      )}
      {isVisible && (
        <Login
          handleLogInButton={handleLogInButton}
          handleLogInBox={handleLogInBox}
          kakaoLogIn={kakaoLogIn}
        />
      )}
    </>
  );
}

export default withRouter(Nav);
