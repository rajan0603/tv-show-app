import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import TicketBooking from './components/TicketBooking';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ShowList} />
          <Route path="/show/:id" exact component={ShowDetails} />
          <Route path="/book-ticket/:id" exact component={TicketBooking} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
