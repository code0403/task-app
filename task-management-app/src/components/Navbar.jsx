import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';


const Navbar = () => {

  const handleLogout = () => {
      localStorage.clear()
      window.location.reload()
  }

  return (
     <Box w={'100%'} height={'auto'} top={0} position={'sticky'} backgroundColor={'white'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} boxShadow= {'rgba(0, 0, 0, 0.35) 0px 5px 15px'} fontFamily={'sans-serif'}  fontSize={'30'} padding={2}>
        <Text>Task Manager</Text>
        <Box w={'50%'} height={'auto'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} >
            <Link to={'/'}>Home</Link>
            <Link to={'/task'}>Tasks</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
            <Link onClick={handleLogout}>Logout</Link>
        </Box>
     </Box>
  )
}

export default Navbar
