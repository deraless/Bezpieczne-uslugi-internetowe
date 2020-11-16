import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { useAuth0 } from '@auth0/auth0-react'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    const [open, setOpen] = useState(false)
    const { isAuthenticated, logout, loginWithRedirect } = useAuth0()
    const { history } = props;

    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false)
    }

    const handleRedirect = (text) => {
        if (text === 'Home') {
            history.push(`/home`)
            handleDrawerClose()
        }
        else if (text === 'Calculator') {
            history.push(`/calc`)
            handleDrawerClose()
        }
        else if (text === 'Example') {
            history.push(`/example`)
            handleDrawerClose()
        }
    }

    return (
        <>
            <AppBar id='header' position='static' >
                <Toolbar>
                    <IconButton onClick={handleDrawerOpen} color='inherit' edge='start'>
                        <Menu />
                    </IconButton>
                    <Typography variant='h6' style={{ flexGrow: 1 }} >
                        Secure web services
                    </Typography>
                    {isAuthenticated ?
                        <Button
                            onClick={() => logout({ returnTo: 'http://localhost:3000/' })}
                            color='inherit'>
                            Logout
                    </Button>
                        :
                        <Button
                            onClick={() => loginWithRedirect({ redirectUri: 'http://localhost:3000/home' })}
                            color='inherit'>
                            Login
                    </Button>
                    }
                </Toolbar>
            </AppBar>
            {isAuthenticated &&
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}>
                    <Divider />
                    <List>
                        {['Home', 'Calculator', 'Example', 'Drafts'].map((text, index) => (
                            <ListItem button key={text} onClick={() => handleRedirect(text)} >
                                <ListItemIcon >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            }
        </>
    )
}

export default withRouter(Header)
