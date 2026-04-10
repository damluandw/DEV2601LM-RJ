import React from 'react'
import Logout from './Logout'
import Login from './Login'

function LoginControl(props) {
    console.log(props);
    if (props.isLogin) {
        return <Logout />
    } else {
        return <Login hvt={props.hvt} />
    }
}

export default LoginControl