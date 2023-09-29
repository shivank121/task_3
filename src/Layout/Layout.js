import { Stack } from '@mui/material'
import React from 'react'
import Header from '../Components/Common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Common/Footer'

const Layout = () => {
  return (
    <>
    <Stack>
        <Header/>
        <Stack ml={0}>
            <Outlet/>
        </Stack>
        <Footer/>
    </Stack>      
    </>
  )
}
export default Layout
