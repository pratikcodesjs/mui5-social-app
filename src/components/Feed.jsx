import React from 'react'
import { Box } from '@mui/material'
import fosts from '../assets/posts.json'
import Posts from './Posts'
const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {fosts.map((post) => {
        return <Posts caption={post.caption} path={post.path}/>
      })}
    </Box>
  )
}

export default Feed