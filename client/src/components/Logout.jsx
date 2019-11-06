import React from 'react';
import axios from 'axios';

const handleLogout = (choice, props) => {
    if(choice) {
        return axios.get('/logout')
            .then(res => {
                props.history.push({
                    pathname: res.data.redirectURI
                }); 
            })
            .catch(err => console.log(err));
    } 
    props.isAuth(false);
    props.history.goBack();
}

const Logout = (props) => (
    <div>
        <strong>Are you sure you want to log out?</strong>
        <button onClick={handleLogout.bind(null, false, props)}>Cancel</button>
        <button onClick={handleLogout.bind(null, true, props)}>Log Out</button>
    </div>
);

export default Logout;