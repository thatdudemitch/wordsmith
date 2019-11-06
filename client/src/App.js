import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Header from './components/Header';
import SongResults from './components/SongResults';
import Lyrics from './components/Lyrics';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: false }
    this.isAuth = this.isAuth.bind(this);
  }
  componentDidMount() {
    axios.get('/profile', { withCredentials: true })
    .then(res => {
      if(res.data.user) {
        this.isAuth(true);
      }
    }); 
  }
  isAuth(status) {
    this.setState(() => ({
      loggedIn: status
    }));
  }
  render() {
    return (
      <Router className="App">
        <Header loggedIn={this.state.loggedIn}/>
        <Route path="/" exact component={Home} />
        <Route path="/songs" exact component={SongResults} />
        <Route path="/songs/:id" exact component={Lyrics} />
        <Route 
          path="/profile" 
          exact 
          render={(props) => <Profile {...props} isAuth={this.isAuth} />}
        />
        <Route 
          path="/register" 
          exact 
          render={(props) => <Register {...props} isAuth={this.isAuth} />}
        />
        <Route 
          path="/login" 
          exact 
          render={(props) => <Login {...props} isAuth={this.isAuth} />}
        />
        <Route 
          path="/logout" 
          exact 
          render={(props) => <Logout {...props} isAuth={this.isAuth} />}
        />
      </Router>
    );
  }
}

export default App;
