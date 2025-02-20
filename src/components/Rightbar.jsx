import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
const Rightbar = () => {
  return (
    <Box
    flex={1.25} p={2} 
    sx={{display: {xs: 'none', sm: 'block'}}}>
    <Box position={'fixed'} width={300}>
      <Typography variant='h6' fontWeight={100} mb={1}>
        Online Friends
      </Typography>
      <AvatarGroup max={7}>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="" />
        <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
        <Avatar alt="John Cena" src="https://mui.com/static/images/avatar/5.jpg" />
        <Avatar alt="Kane Williamson" src="https://mui.com/static/images/avatar/6.jpg" />
        <Avatar alt="David Warner" src="https://mui.com/static/images/avatar/7.jpg" />
        <Avatar alt="Fedor Emelienenko" src="https://mui.com/static/images/avatar/8.jpg" />
        <Avatar alt="Conor McGregor" src="https://mui.com/static/images/avatar/9.jpg" />
        <Avatar alt="Dan Henderson" src="https://mui.com/static/images/avatar/10.jpg" />
        <Avatar alt="Joshua Little" src="https://mui.com/static/images/avatar/11.jpg" />
        <Avatar alt="Upul Tharanga" src="https://mui.com/static/images/avatar/12.jpg" />
        <Avatar alt="Robin Uthhappa" src="https://mui.com/static/images/avatar/13.jpg" />
        <Avatar alt="Travis Head" src="https://mui.com/static/images/avatar/14.jpg" />
      </AvatarGroup>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2} >
        Latest Photos
      </Typography>
      <ImageList cols={3} rowHeight={150} gap={5}>
        <ImageListItem>
          <img
          src='https://mui.com/static/images/image-list/burgers.jpg'
          alt='burgers'
          />
        </ImageListItem>
        <ImageListItem> 
          <img
          src='https://mui.com/static/images/image-list/camera.jpg'
          alt='burgers'
          />
        </ImageListItem>
        <ImageListItem>
          <img
          src='https://mui.com/static/images/image-list/breakfast.jpg'
          alt='burgers'
          />
        </ImageListItem>
      </ImageList>
      <Typography variant='h6' fontWeight={100} mt={2}>
        Latest Conversations
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    </Box>
  )
}

export default Rightbar