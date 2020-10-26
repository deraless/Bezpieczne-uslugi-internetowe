import React, { memo } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


const PrivateRoute = ({ component: Component, path, ...rest }) => {
    const { isAuthenticated } = useAuth0()

    if (!isAuthenticated && path !== `/`) {
        return <Redirect to="/" />
    }
    return (
        <Component {...rest} />
    )
}

export default memo(PrivateRoute)
