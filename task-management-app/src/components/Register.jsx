import React, { useState } from "react";
import { Box, Button, FormLabel, Input, Select, Text } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [isFormReady, setIsFormReady] = useState(false);

  const handleRegister = () => {
    const payload = {
      email: email,
      password: password,
      name: name,
      role: role,
    };
    console.log(payload);

    //connection frontend and backend
    fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));

    setEmail("")
    setPassword("")
    setName("")
    setRole("")
  };

  return (
    <Box
      w={"100%"}
      h={"auto"}
      bg={"gray.100"}
      fontFamily={"Poppins, sans-serif"}
    >
      <Text
        fontStyle={"normal"}
        fontFamily={"Poppins, sans-serif"}
        fontSize={"4xl"}
        color={"red.500"}
      >
        Register,
      </Text>
      <Text
        fontStyle={"normal"}
        fontFamily={"Poppins, sans-serif"}
        fontSize={"2xl"}
        color={"blue.400"}
      >
        To use the Task Manager App <CalendarIcon />{" "}
      </Text>

      <Box
        w={"50%"}
        h={"auto"}
        margin={"auto"}
        padding={"5"}
        mt={5}
        borderRadius={10}
        bg={"white"}
        boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <FormLabel mt={5}>Name: </FormLabel>
        <Input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setIsFormReady(!!e.target.value && !!email && !!password && !!role);
          }}
          
          required
        />

        <FormLabel mt={5}>Empolyment Category</FormLabel>
        <Select value={role} onChange={(e) => {
          setRole(e.target.value);
          setIsFormReady(!!e.target.value && !!email && !!password && !!role);
          }} required>
          <option>Admin</option>
          <option>Employee</option>
        </Select>

        <FormLabel mt={5}>Email: </FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Registered Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsFormReady(!!e.target.value && !!email && !!password && !!role);
          }}
          required
        />

        <FormLabel mt={5}>Password: </FormLabel>
        <Input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsFormReady(!!e.target.value && !!email && !!password && !!role);
          }}
          required
        />

        <Button
          mt={5}
          bg={"green.400"}
          color={"whiteAlpha.900"}
          fontSize={18}
          letterSpacing={2}
          onClick={handleRegister}
          disabled={isFormReady}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
