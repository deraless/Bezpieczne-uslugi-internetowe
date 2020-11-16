import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <button
                id='loginButton'
                onClick={() => loginWithRedirect({
                    redirectUri: 'https://buiproject.name/home'
                })}>
                Log in
            </button>)
    )
}

export default LoginButton
