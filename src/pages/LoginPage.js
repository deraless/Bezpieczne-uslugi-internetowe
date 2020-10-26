import React, { memo } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Redirect } from 'react-router-dom'
import Profile from '../components/Profile'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const LoginPage = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0()
    if (isAuthenticated)
        return <Redirect to='/home' />


    return (
        <>
            <AppBar position='static' >
                <Toolbar>
                    <IconButton color='inherit' edge='start'>
                        <Menu />
                    </IconButton>
                    <Typography variant='h6' style={{ flexGrow: 1 }}>
                        Bezpieczne uslugi internetowe
                    </Typography>
                    <Button
                        onClick={() => loginWithRedirect({ redirectUri: 'http://localhost:3000/home' })}
                        color='inherit'>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Profile />
        </>
    )
}

export default memo(LoginPage)
