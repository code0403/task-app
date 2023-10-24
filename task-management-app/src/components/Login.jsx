import React, { useState } from "react";
import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormReady, setIsFormReady] = useState(false);


  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };

    //connection frontend and backend
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
  };

  return (
    <Box w={"100%"} h={"100vH"} bg={"gray.100"}>
      <Text
        fontStyle={"normal"}
        fontFamily={"Poppins, sans-serif"}
        fontSize={"4xl"}
        color={"red.500"}
      >
        Login
      </Text>
      <Text
        fontStyle={"normal"}
        fontFamily={"Poppins, sans-serif"}
        fontSize={"2xl"}
        color={"blueviolet"}
      >
        Welcome back
      </Text>

      <Box
        w={"50%"}
        margin={"auto"}
        padding={"5"}
        mt={5}
        borderRadius={10}
        bg={"white"}
        boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <FormLabel mt={5}>Email: </FormLabel>
        <Input type="email" placeholder="Enter Your Registered Email" value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsFormReady(!e.target.value);
          }}
          required />

        <FormLabel mt={5}>Password: </FormLabel>
        <Input type="password" placeholder="Enter Your Password" value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsFormReady(!e.target.value);
          }}
          required />

        <Button
          mt={5}
          bg={"green.400"}
          color={"whiteAlpha.900"}
          fontSize={18}
          letterSpacing={2}
          onClick={handleLogin}
          disabled={isFormReady}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
