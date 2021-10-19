import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <NavMargin />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;

const NavMargin = styled.div`
  margin-top: 100px;
`;
