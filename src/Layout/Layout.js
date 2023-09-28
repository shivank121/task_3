import { Stack } from '@mui/material'
import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const Layout = () => {
  return (
    <>
    <Stack>
        <Header/>
        <Stack>
            <Outlet/>
        </Stack>
        <Footer/>
    </Stack>      
    </>
  )
}
export default Layout
