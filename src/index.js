import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './components/GlobalStyle';
import Routes from './Routes';

ReactDOM.render(
  <>
    <GlobalStyle />, <Routes />
  </>,
  document.getElementById('root')
);
