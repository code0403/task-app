import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormLabel,
  FormControl,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useRef, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

const CreateTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

 

  const handleTask = async () => {
      
    try {
        let task = await fetch(`http://localhost:8080/tasks/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ title, description })
        })
        console.log(task)
    } catch (error) {
        console.log(error)
    }

    setTitle("")
    setDescription("")
    window.location.reload()
  };


  

  return (
    <>
      <Button
        w={200}
        h={10}
        bg={"red.400"}
        color={"whiteAlpha.900"}
        fontSize={18}
        gap={5}
        mt={10}
        onClick={onOpen}
      >
        <AddIcon />
        Create Task
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Tasks</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Enter the Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                placeholder="Decribe Your Task"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleTask}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateTask;
