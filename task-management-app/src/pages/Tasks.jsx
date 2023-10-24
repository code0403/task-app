import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from "@chakra-ui/react";
import CreateTask from './CreateTask';
import { useToast } from '@chakra-ui/react'
import EditTask from './EditTask';

const Tasks = () => {

  const toast = useToast()

  const[tasks, setTasks] = useState("")
  let serialno = 1;

  useEffect(() => {
    fetch("http://localhost:8080/tasks/",{
        method: 'GET',
        headers: {
          'authorization': `${localStorage.getItem("token")}`
        }
    }).then(res => res.json())
    .then(res => {
        console.log(res)
        setTasks(res)
        toast({
          title: 'Task created.',
          description: "New Task Created.",
          status: 'success',
          duration: 1000,
          isClosable: true,
        })
    })
    .catch(err => console.log(err))
}, [])


 //Delete a Task
 const handleDelete = (id) => {

   fetch(`http://localhost:8080/tasks/delete/${id}`,{
     method:'DELETE',
     headers:{
       'authorization': `${localStorage.getItem("token")}`
     }
   }).then(res => res.json())
   .then(res => console.log(res))
   .catch(err => console.error(err))

   alert("Note has been deleted")
   window.location.reload();
}


  return (
     <Box mt={50}>
        <CreateTask />

        <Box>
        {
        tasks.length > 0 ? tasks.map((el) => (
            <Box key={el._id} style={{display:"flex", justifyContent:"space-around", alignItems:"center", gap:"20px", marginTop:"30px"}}>
                <Box w={10} h={20}><p>{serialno++}</p></Box>
                <Box w={200} h={20}><h3>{el.title}</h3></Box>
                <Box w={200} h={20}><p>{el.description}</p></Box>
                <Box w={50} h={20}><EditTask id={el._id} /></Box>
                <Box w={50} h={20}><Button bg={'red.400'} w={100} onClick={()=>handleDelete(el._id)}>Delete</Button></Box>
            </Box>
        )) : <Text>No Notes fore the User. Add Some notes to see.</Text>
      }
        </Box>
     </Box>
  )
}

export default Tasks
