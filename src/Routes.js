import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import placelist from './components/Placelist/Placelist';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <div style={{ marginTop: '100px' }} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/placelist" component={placelist} />
          <Route exact path="/placelist/:id" component={placelist} />
          <Route exact path="/placelist/:id/:id2" component={placelist} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}
export default Routes;
