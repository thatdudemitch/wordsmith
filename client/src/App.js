import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import SongResults from './components/SongResults';
import Lyrics from './components/Lyrics';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileSong from './components/ProfileSong';
import Logout from './components/Logout';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            user: null,
            songs: []
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.setUser = this.setUser.bind(this);
    }

    componentDidMount() {
        axios.get('/profile')
            .then(res => {
                if(res.data.user) {
                    this.setState(() => ({ 
                        loggedIn: true,
                        user: res.data.user, 
                        songs: [...res.data.songs] 
                    }))
                }
            })
            .catch(err => console.log(err)); 
    }

    setUser(payload) {
        if(payload.data.user) {
            this.setState(() => ({ 
                loggedIn: true,
                user: payload.data.user,
                songs: [...payload.data.songs] 
            }))
            return;
        } 
    }

    handleLogout(choice) {
        if(choice) {
            axios.get('/logout')
                .then(res => {
                    this.setState(() => ({
                        loggedIn: false,
                        user: null,
                        songs: []
                    }));
                    return this.props.history.push({
                        pathname: res.data.redirectURI
                    }); 
                })
                .catch(err => console.log(err));
        } 
        this.props.history.goBack();
    }
    

    render() {
        return (
            <Router className="App">
                <Header loggedIn={this.state.loggedIn}/>
                <Route path="/" exact component={Home}/>
                <Route path="/songs" exact component={SongResults}/>
                <Route 
                    path="/songs/:id" 
                    exact 
                    render={(props) => <Lyrics {...props} user={this.state.user} songs={this.state.songs} />}
                />
                <Route
                    path="/profile"
                    exact
                    render={(props) => <Profile {...props} setUser={this.setUser} user={this.state.user} songs={this.state.songs}/>}
                />
                <Route
                    path="/profile/:id"
                    exact
                    render={(props) => <ProfileSong {...props} user={this.state.user} />}
                />
                <Route
                    path="/register"
                    exact
                    render={(props) => <Register {...props} setUser={this.setUser}/>}/>
                <Route
                    path="/login"
                    exact
                    render={(props) => <Login {...props} setUser={this.setUser}/>}/>
                <Route
                    path="/logout"
                    exact
                    render={(props) => <Logout {...props} handleLogout={this.handleLogout} setUser={this.setUser}/>}/>
            </Router>
        );
    }
}

export default App;
