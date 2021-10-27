import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import PlaceDetail from './pages/PlaceDetail/PlaceDetail';
import Reservation from './pages/Reservation/Reservation';
import ReservationDetails from './pages/ReservationDetails/ReservationDetails';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <NavMargin />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/PlaceDetail/" component={PlaceDetail} />
          <Route exact path="/reservation" component={Reservation} />
          <Route
            exact
            path="/reservationDetails/:name"
            component={ReservationDetails}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;

const NavMargin = styled.div`
  margin-top: 80px;
`;
