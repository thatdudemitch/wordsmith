import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledRegister } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from '../../hooks/useRouter';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    const router = useRouter();

    async function handleOnSubmit(e) {
        e.preventDefault();
        try {
            const user = auth.signup(username, email, password);
            router.history.push({
                pathname: '/profile'
            });
        } catch(err) {
            router.history.push({
                pathname: '/auth/register'
            });
            return null;
        }
    }

    return (
        <StyledRegister>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <input type="text" value={username} placeholder="Choose username" required onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" value={email} placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" value={password} placeholder="Choose password" required onChange={(e) => setPassword(e.target.value)}/>
                <button>Register</button>
                <p className="message">Already have an account? <Link to="/login">Sign In</Link></p>
            </form>
        </StyledRegister>
    )
}

export default Register;