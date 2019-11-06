import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(() => ({
            [name]: value
        }));
    }

    handleOnSubmit(e) {
        e.preventDefault();

        const credentials = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/register', credentials)
            .then(user => {
                if(user) {
                    this.props.isAuth(user.data.loggedIn);
                    this.props.history.push({
                        pathname: user.data.redirectURI
                    });
                }
            })
            .catch(err => console.error(err));

    }
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" name="username" placeholder="Choose username" required onChange={this.handleOnChange}/>
                <input type="email" name="email" placeholder="Enter email" required onChange={this.handleOnChange}/>
                <input type="password" name="password" placeholder="Choose password" required onChange={this.handleOnChange}/>
                <button>Register</button>
            </form>
        )
    }
}

export default Register;