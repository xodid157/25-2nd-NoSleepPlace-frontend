import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavMain from './NavMain/NavMain';
import NavCategory from './NavCategory/NavCategory';
import SearchModal from './SearchModal/SearchModal';
import Login from '../Login/Login';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isCategoryButton: false,
      isSearch: false,
      isInfoBytton: false,
      isLogIn: false,
      categotyList: [],
      kakaoList: [],
      isVisible: false,
      liveSearch: [],
      userInput: '',
    };
  }

  componentDidMount() {
    fetch('/data/navListData.json')
      .then(res => res.json())
      .then(result =>
        this.setState({
          categotyList: result,
        })
      );

    fetch(`http://52.79.51.199:8000/places?`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          liveSearch: res.result,
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

  handleLogInButton = () => {
    this.setState(prevState => {
      return {
        isVisible: !prevState.isVisible,
      };
    });
  };

  handleLogInBox = () => {
    this.setState(prevState => {
      return {
        isLogIn: !prevState.isLogIn,
      };
    });
  };

  kakaoLogOut = () => {
    window.localStorage.clear();
    this.setState(prevState => {
      return {
        isLogIn: !prevState.isLogIn,
        isInfoBytton: !prevState.isInfoBytton,
      };
    });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      userInput: value,
    });
  };

  handleEnter = e => {
    const { value } = e.target;
    const { history } = this.props;
    if (e.key === 'Enter') {
      this.setState(prevState => {
        return {
          isSearch: !prevState.isSearch,
          isCategoryButton: false,
          userInput: value,
        };
      });
      history.push(`/places?keyword=${value}`);
    }
  };

  kakaoLogIn = () => {
    fetch('http://52.79.51.199:8000/users/profile', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          kakaoList: res.result,
        })
      );
  };

  render() {
    const {
      isCategoryButton,
      categotyList,
      isSearch,
      isLogIn,
      kakaoList,
      isInfoBytton,
      isVisible,
      liveSearch,
      userInput,
    } = this.state;

    const filterSearch = liveSearch.filter(content => {
      return content.place_name.toLowerCase().includes(userInput.toLowerCase());
    });

    return (
      <>
        <NavMain
          handleCategotyButton={this.handleCategotyButton}
          handleSerchButton={this.handleSerchButton}
          isLogIn={isLogIn}
          kakaoList={kakaoList}
          isInfoBytton={isInfoBytton}
          handleInfoBytton={this.handleInfoBytton}
          handleLogInButton={this.handleLogInButton}
          kakaoLogOut={this.kakaoLogOut}
        />
        {isCategoryButton && (
          <NavCategory
            categotyList={categotyList}
            handleCategotyButton={this.handleCategotyButton}
          />
        )}
        {isSearch && (
          <SearchModal
            handleChange={this.handleChange}
            filterSearch={filterSearch}
            userInput={userInput}
            handleSerchButton={this.handleSerchButton}
            handleEnter={this.handleEnter}
          />
        )}
        {isVisible && (
          <Login
            handleLogInButton={this.handleLogInButton}
            handleLogInBox={this.handleLogInBox}
            kakaoLogIn={this.kakaoLogIn}
          />
        )}
      </>
    );
  }
}
export default withRouter(Nav);
