import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import React, { useState } from 'react'
import userImage from '../assets/images/user.png'
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px' 
})

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip sx={{position: 'fixed', bottom: 20, left:{xs: 'calc(80% - 2px)', md:50}}} onClick={e=>setOpen(true)}>
        <Fab color="primary" aria-label="add">
        <AddIcon/>
        </Fab>
    </Tooltip>
    <StyledModal
      open={open}
      onClose={e=>setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        height: 280,
        width: 400,
        bgcolor: 'background.default',
        color: 'text.primary',
        padding: 3,
        borderRadius: 5
      }}>
        <Typography variant='h6' color='grey' textAlign='center'>
          Create Post
        </Typography>
        <UserBox>
          <Avatar
           src={userImage}
           alt='user image'
           sx={{height: 30, width: 30}}
           />
          <Typography fontWeight={500} variant='span'>
            Pratik Gaikwad
          </Typography>
        </UserBox>
        <TextField sx={{width: '100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind..?"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={3}>
          <EmojiEmotions color='primary'/>
          <Image color='secondary'/>
          <VideoCameraBack color='success'/>
          <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
        <Button>Post</Button>
        <Button sx={{width: '100px'}}><DateRange/></Button>
        </ButtonGroup>
      </Box>
    </StyledModal>
    </>
  )
}

export default Add