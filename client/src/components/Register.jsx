import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledRegister = styled.div`
    form {
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        max-width: 360px;
        margin: 0 auto 100px;
        padding: 45px;
        text-align: center;

        input {
            outline: 0;
            background: #f2f2f2;
            width: 100%;
            border: 0;
            margin: 0 0 15px;
            padding: 15px;
            box-sizing: border-box;
            font-size: 14px;
        }

        button {
            text-transform: uppercase;
            outline: 0;
            background: #949eff;
            color: #FFF;
            box-shadow: 0 3px 15px rgba(200, 200, 200, 0.5);
            width: 100%;
            border: 0;
            padding: 15px;
            color: #FFFFFF;
            font-size: 14px;
            -webkit-transition: all 0.3 ease;
            transition: all 0.3 ease;
            cursor: pointer;
            
            &:hover, 
            &:active, 
            &:focus {
                background: #3A49E0;
            }
        }

        .message {
            margin: 15px 0 0;
            color: #b3b3b3;
            font-size: 12px;

            a {
                color: #4CAF50;
                text-decoration: none;
            }
        }
    }
`;

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
            <StyledRegister>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="username" placeholder="Choose username" required onChange={this.handleOnChange}/>
                    <input type="email" name="email" placeholder="Enter email" required onChange={this.handleOnChange}/>
                    <input type="password" name="password" placeholder="Choose password" required onChange={this.handleOnChange}/>
                    <button>Register</button>
                    <p class="message">Already have an account? <Link to="/login">Sign In</Link></p>
                </form>
            </StyledRegister>
        )
    }
}

export default Register;