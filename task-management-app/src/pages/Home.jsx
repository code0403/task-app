import {  Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { LiaClipboardListSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@chakra-ui/react";

const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const toast = useToast()

  const AddTask = () => {
    if(token){
      navigate("/tasks")
    } else {
      toast({
        title: 'Singup/Login',
        description: "You are not logged in.",
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <Box mt={"50"} height={"100vH"}>
      <Text fontFamily={"Poppins, sans-serif"} fontSize={"28"}>
        Welcome, Let's get start with the day.
      </Text>

      <Box mt={50} fontSize={200} display={"flex"} justifyContent={"center"}>
        <LiaClipboardListSolid />
      </Box>

      <Button
        w={200}
        h={10}
        bg={"red.400"}
        color={"whiteAlpha.900"}
        fontSize={18}
        gap={5}
        mt={10}
        onClick={AddTask}
      >
        <AddIcon />
        <Text>Create a Task</Text>
      </Button>

      <Box>
        {token === null ? (
          <Text fontFamily={"Poppins, sans-serif"} fontSize={"18"} mt={5}>
            Signup Or Login to create tasks.
          </Text>
        ) : (
          <Text fontFamily={"Poppins, sans-serif"} fontSize={"18"} mt={5}>
            Click on the button to create Tasks for the day.
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Home;
