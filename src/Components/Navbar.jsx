import React from 'react'
import { 
    Box,
    Image,
    Heading
} from '@chakra-ui/react'
import videoIcon from "../Assets/videoIcon.png"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate();
  function handleNavigation(){
    navigate("/");
  }
  return (
    <Box height={"3rem"}  padding="0.5rem" display="flex" justifyContent="space-between" backgroundColor={"rgb(34,193,195)"} background={"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,53,253,1) 100%)"}>
        <Heading _hover={{cursor:"pointer"}} marginTop="auto" marginBottom="auto" marginLeft="0.5rem" onClick={handleNavigation}>Shots</Heading>
       <Image _hover={{cursor:"pointer"}} display="block" background="transparent" marginRight="0.5rem" src={videoIcon} alt="video-icon" onClick={handleNavigation}/>
    </Box>
  )
}

export default Navbar
