import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Navbar from './components/Navbar'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Add from "./components/Add"
import { useState } from "react"
function App() {
  const [mode, setMode] = useState('light')
  const appTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={appTheme}>
      <Box bgcolor='background.default' color={'text.primary'}>
      <Navbar />
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  )
}

export default App