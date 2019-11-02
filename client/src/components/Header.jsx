import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loggedIn: this.props.loggedIn }
    }
    render() {
        return (
            <nav>
                <Link to="/">Wordsmith</Link>
                {
                    !this.state.loggedIn
                    ? (
                        <ul>
                            <li>
                                <Link to="/auth/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/auth/register">Register</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/">Logout</Link>
                            </li>
                        </ul>
                    )
                }
            </nav>
        )
    }
}        

export default Header;