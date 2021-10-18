import React, { Component } from 'react';
import NavMain from './NavMain/NavMain';
import NavCategory from './NavCategory/NavCategory';
import SearchModal from './SearchModal/SearchModal';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isCategoryButton: false,
      isSearch: false,
      isInfoBytton: false,
      isLogIn: true,
      categotyList: [],
      kakaoList: [],
    };
  }

  componentDidMount() {
    fetch('/data/navListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result =>
        this.setState({
          categotyList: result,
        })
      );

    fetch('/data/kakaoData.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result =>
        this.setState({
          kakaoList: result,
        })
      );
  }

  handleCategotyButton = () => {
    this.setState(prevState => {
      return {
        isCategoryButton: !prevState.isCategoryButton,
        isSearch: false,
      };
    });
  };

  handleSerchButton = () => {
    this.setState(prevState => {
      return {
        isSearch: !prevState.isSearch,
        isCategoryButton: false,
      };
    });
  };

  handleInfoBytton = () => {
    this.setState(prevState => {
      return {
        isInfoBytton: !prevState.isInfoBytton,
      };
    });
  };

  render() {
    const {
      isCategoryButton,
      categotyList,
      isSearch,
      isLogIn,
      kakaoList,
      isInfoBytton,
    } = this.state;

    return (
      <>
        <NavMain
          handleCategotyButton={this.handleCategotyButton}
          handleSerchButton={this.handleSerchButton}
          isLogIn={isLogIn}
          kakaoList={kakaoList}
          isInfoBytton={isInfoBytton}
          handleInfoBytton={this.handleInfoBytton}
        />
        {isCategoryButton && <NavCategory categotyList={categotyList} />}
        {isSearch && <SearchModal />}
      </>
    );
  }
}
