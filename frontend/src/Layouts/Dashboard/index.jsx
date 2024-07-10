import { Box, Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const DashboardLayout = () => {
  return <Box>
    <Container className='flex flex-col mt-7' maxWidth="xl">
      <Header />
      <Outlet />
    </Container>
  </Box>
}

export default DashboardLayout