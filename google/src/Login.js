import React from 'react'
import { Button } from '@material-ui/core'


function Login(props) {
    const loginToApp = () => {
        props.setUser("Pratibha");
    };

    return (
        <div>
            <h1>The Login Component</h1>
            <Button onClick={loginToApp}>LOGIN</Button>
        </div>
    );
};

export default Login
