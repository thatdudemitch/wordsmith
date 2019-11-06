import React from 'react';
import axios from 'axios';

class Profile extends React.Component {
    componentDidMount() {
        axios.get('/profile')
            .then(res => {
                console.log(res)
                if(!res.data.username) {
                  this.props.isAuth(true);
                  return this.props.history.push({
                      pathname: "/login"
                  }); 
                }
                console.log('not hit');
                this.props.isAuth(true);
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                Profile Component
            </div>
        )
    }
}

export default Profile;