import React, {useState, useEffect, useContext, createContext} from "react";
import axios from 'axios';

const authContext = createContext();

export const ProvideAuth = ({children}) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (username, password) => {
        const credentials = {
            username,
            password
        }

        return axios.post('/auth/login', credentials)
            .then(() => axios.get('/profile'))
            .then(user => {
                setUser(user.data);
                return user.data;
            })
            .catch(err => console.error("Error", err));
    };

    const signup = (username, email, password) => {
        const credentials = {
            username,
            email,
            password
        }

        return axios.post('/auth/register', credentials)
        .then(() => axios.get('/profile'))
        .then(user => {
            setUser(user.data);
            return user.data;
        })
        .catch(err => console.error("Error", err));
    };

    const signout = (choice) => {
        if(choice) {
            return axios.get('/auth/logout')
                .then(() => {
                    setUser(null);
                    return true;
                })
                .catch(err => console.log(err));
        } 
        return false;
    };

    useEffect(() => {
        axios.get('/profile')
            .then(res => {
                res.data.user ? setUser(res.data) : setUser(null);
            })
            .catch(err => console.log(err));
    }, []);

    return {
        user,
        setUser,
        signin,
        signup,
        signout,
    };
}