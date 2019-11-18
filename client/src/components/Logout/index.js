import React from 'react';
import { StyledLogout, StyledButton } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from '../../hooks/useRouter';

const Logout = props => {
    const auth = useAuth();
    const router = useRouter();

    function handleSignout(choice) {
        const confirmSignout = auth.signout(choice);
        if (confirmSignout) {
            router.history.push({
                pathname: '/'
            });
            return null;
        }
        router.history.goBack();
    }

    return (
        <StyledLogout>
            <p className="message">Are you sure you want to log out?</p>
            <div className="ctas">
                <StyledButton onClick={() => handleSignout(false)}>Cancel</StyledButton>
                <StyledButton warn onClick={() => handleSignout(true)}>Log Out</StyledButton>
            </div>
        </StyledLogout>
    )
};

export default Logout;