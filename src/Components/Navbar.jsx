import React from 'react'
import { 
    Box,
    Image,
    Heading
} from '@chakra-ui/react'
import videoIcon from "../Assets/videoIcon.png"
const Navbar = () => {
  return (
    <Box height={"3rem"}  padding="0.5rem" display="flex" justifyContent="space-between" backgroundColor={"rgb(34,193,195)"} background={"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,53,253,1) 100%)"}>
        <Heading marginTop="auto" marginBottom="auto" marginLeft="0.5rem" >Shots</Heading>
       <Image display="block" background="transparent" marginRight="0.5rem" src={videoIcon} alt="video-icon"/>
    </Box>
  )
}

export default Navbar
