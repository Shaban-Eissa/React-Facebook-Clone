import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'


function Login() {

    const [state , dispatch] = useStateValue() ;
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result =>
            dispatch({
                type : actionTypes.SET_USER , 
                user : result.user
            })
        )
        .catch((error => alert(error.message)))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                <img src="https://logosdownload.com/logo/facebook-logo-big.png" alt="" />
            </div>

            <Button type="submit" onClick = {signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
