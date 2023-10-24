import React from 'react';
import { Box, Button, FormLabel, Input, Select, Text } from '@chakra-ui/react';
import { CalendarIcon } from "@chakra-ui/icons";

const Register = () => {
  return (
    <Box w={'100%'} h={'auto'} bg={'gray.100'} fontFamily={'Poppins, sans-serif'}  >
        <Text fontStyle={'normal'} fontFamily={'Poppins, sans-serif'} fontSize={'4xl'} color={'red.500'} >Register,</Text>
        <Text fontStyle={'normal'} fontFamily={'Poppins, sans-serif'} fontSize={'2xl'} color={'blue.400'}>To use the Task Manager App <CalendarIcon /> </Text>

      <Box w={'50%'} h={'auto'} margin={'auto'} padding={'5'} mt={5} borderRadius={10} bg={'white'} boxShadow={' rgba(0, 0, 0, 0.24) 0px 3px 8px'} >

          <FormLabel mt={5}>Name: </FormLabel>
          <Input type='text' placeholder='Enter Your Name'  />

          <FormLabel mt={5}>Empolyment Category</FormLabel>
          <Select>
            <option>Admin</option>
            <option>Employee</option>
          </Select>

          <FormLabel mt={5}>Email: </FormLabel>
          <Input type='email' placeholder='Enter Your Registered Email' />

          <FormLabel mt={5}>Password: </FormLabel>
          <Input type='password' placeholder='Enter Your Password' />

          <Button mt={5} bg={'green.400'} color={'whiteAlpha.900'} fontSize={18} letterSpacing={2} >Submit</Button>
      </Box>

    </Box>
  )
}

export default Register
