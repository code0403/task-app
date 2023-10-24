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
  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';




const EditTask = (id) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(id)

    useEffect(() => {
        fetch(`http://localhost:8080/tasks/${id}`,{
            method: 'GET',
            headers: {
              'authorization': `${localStorage.getItem("token")}`
            }
        }).then(res => res.json())
        .then(res => {
            console.log(res)
            setTitle(res.title)
            setDescription(res.description)
        })
        .catch(err => console.log(err))
    }, [])


    const handleEdit = () => {

        fetch(`https://puce-faithful-gecko.cyclic.app/notes/update/${id}`, {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${localStorage.getItem("token")}`
            },
            body: JSON.stringify({title, description})
        }).then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    
    return (
      <>
        <Button bg={'green.400'} w={100} onClick={onOpen}>Edit</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Your Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input placeholder='Enter The Title' value={title} onChange={(e) => setTitle(e.target.value)} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Title Description</FormLabel>
                <Input placeholder='Enter The Task Description' value={description} onChange={(e) => setDescription(e.target.value)} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleEdit}>
                Edit Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default EditTask;