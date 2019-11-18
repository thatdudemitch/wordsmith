import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProvideAuth } from '../../hooks/useAuth';
import { Home, Header, SongResults, Lyrics, Register, Login, Logout, Profile, ProfileSong } from '../index';

const App = () => {
    return (
        <ProvideAuth>
            <div className="App">
                <Router>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/songs/:id" component={SongResults} />
                    <Route exact path="/song/:id" component={Lyrics} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile/:id" component={ProfileSong} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                </Router>
            </div>
        </ProvideAuth>
    )
}

export default App;