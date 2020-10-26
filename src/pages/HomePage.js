import React, { useState, memo } from 'react'
import LogoutButton from '../components/LogoutButton'
import Profile from '../components/Profile'
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { useAuth0 } from '@auth0/auth0-react'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const HomePage = () => {
  const [open, setOpen] = useState(false)
  const { logout } = useAuth0()

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <>
      <AppBar position='static' >
        <Toolbar>
          <IconButton onClick={handleDrawerOpen} color='inherit' edge='start'>
            <Menu />
          </IconButton>
          <Typography variant='h6' style={{ flexGrow: 1 }} >
            Bezpieczne uslugi internetowe
                    </Typography>
          <Button
            onClick={() => logout({ returnTo: 'http://localhost:3000/' })}
            color='inherit'>
            Logout
                    </Button>
        </Toolbar>
      </AppBar>
      <LogoutButton />
      <Profile />
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}>
        <h3>this is a drawer</h3>
        <Divider />
        <List>
          {['Kalkulator', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
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
    </>
  )
}

export default memo(HomePage)
