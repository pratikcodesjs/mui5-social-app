import { AccountBox, AutoStories, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, styled } from '@mui/material'
import React from 'react'
const StyledListItem = styled(ListItem)({
  padding: '10px 0',
  margin: '10px 0'
})
const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display: {xs: 'none', sm:'block' }}}>
      <Box position={'fixed'}>
      <List>
          <StyledListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </StyledListItem>
          <StyledListItem disablePadding>
            <ListItemButton component='a' href='#pages'>
              <ListItemIcon>
                <AutoStories/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </StyledListItem>
          <StyledListItem disablePadding>
            <ListItemButton component='a' href='#groups'>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </StyledListItem>
          <StyledListItem disablePadding>
            <ListItemButton component='a' href='#marketplace'>
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </StyledListItem>
          <StyledListItem disablePadding>
            <ListItemButton component='a' href='#friends'>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </StyledListItem>
          <StyledListItem disablePadding>
            <ListItemButton component='a' href='#settings'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </StyledListItem>
          <StyledListItem disablePadding>
            <ListItemButton component='a' href='#profile'>
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </StyledListItem>
          <StyledListItem disablePadding>
            <ListItemButton component='a' href='#mode'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={e=> setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
          </StyledListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar