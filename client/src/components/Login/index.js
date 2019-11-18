import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledLogin } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from '../../hooks/useRouter';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    const router = useRouter();

    async function handleOnSubmit(e) {
        e.preventDefault();
        try {
            const user = await auth.signin(username, password);
            if (router.history.location.state) {
                router.history.push({
                    pathname: router.history.location.state.prevPath
                });
                return null;
            }
            router.history.push({
                pathname: '/profile'
            });
        } catch(err) {
            router.history.push({
                pathname: '/auth/login'
            });
            console.log(err);
            return null;
        }
    }
    
    return (
        <StyledLogin>
            {/* {error && <p className="error">{error}</p>} */}
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <input type="text" value={username} placeholder="Enter username" required onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" value={password} placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}/>
                <button>Log In</button>
                <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
            </form>
        </StyledLogin>
    )
}

export default Login;