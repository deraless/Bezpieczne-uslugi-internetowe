import React, { memo } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Redirect } from 'react-router-dom'


const LoginPage = (path) => {
    const { isAuthenticated } = useAuth0()
    if (isAuthenticated)
        return <Redirect to='/home' />


    return (
        <>
            <span>Login page</span>
        </>
    )
}

export default memo(LoginPage)
