import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './components/Search';
import Header from './components/Header';
import SongResults from './components/SongResults';
import Lyrics from './components/Lyrics';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: false }
  }
  render() {
    return (
      <Router className="App">
        <Header loggedIn={this.props.loggedIn}/>
        <Route path="/" exact component={Search} />
        <Route path="/songs" exact component={SongResults} />
        <Route path="/songs/:id" exact component={Lyrics} />
      </Router>
    );
  }
}

export default App;
