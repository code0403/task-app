import React from 'react';
import { Box, Button, FormLabel, Input, Text } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box w={'100%'} h={'100vH'} bg={'gray.100'}  >
    <Text fontStyle={'normal'} fontFamily={'Poppins, sans-serif'} fontSize={'4xl'}>Register</Text>
    <Text fontStyle={'normal'} fontFamily={'Poppins, sans-serif'} fontSize={'2xl'}>to use the Task Manager</Text>

  <Box w={'50%'}  margin={'auto'} padding={'5'} mt={5} borderRadius={10} bg={'white'} boxShadow={' rgba(0, 0, 0, 0.24) 0px 3px 8px'} >

      <FormLabel mt={5}>Email: </FormLabel>
      <Input type='email' placeholder='Enter Your Registered Email' />

      <FormLabel mt={5}>Password: </FormLabel>
      <Input type='password' placeholder='Enter Your Password' />

      <Button mt={5} bg={'green.400'} color={'whiteAlpha.900'} fontSize={18} letterSpacing={2} >Submit</Button>
  </Box>

</Box>
  )
}

export default Login
