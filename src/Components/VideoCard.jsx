import React from 'react'
import { 
    Box ,
    Image,
    Text,
    Heading
} from '@chakra-ui/react'
import heart from "../Assets/heart.png"
import comment from "../Assets/comment.png"
import { useNavigate } from 'react-router-dom'
const VideoCard = ({data,idx}) => {

    const navigate=useNavigate();
    function handleNavigation(e){
        e.preventDefault();
        navigate(`${idx}`);
    }

  return (
    <Box _hover={{cursor:"pointer"}} width="max-content" border={"1px solid"}   borderRadius={"0.5rem"} box-shadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" onClick={handleNavigation}>
        <Image display={"block"} width={"15rem"} height={"22rem"} src={data.submission.thumbnail} borderRadius={"0.5rem 0.5rem 0 0"} alt="Thubnail" />
        <Heading padding={"0.5rem"} marginTop={"-0.5rem"} textAlign={"start"} fontWeight={"500"} color={"white"} fontSize={"1.9rem"}>{data.submission.title}</Heading>
        <Box marginTop={"-2.7rem"} display={"flex"} justifyContent={"space-between"} textAlign={"start"} padding={"0.5rem"}>
            <Box>
                <Text color="white">
                    {data.creator.name?data.creator.name:"Random"}
                </Text>
                <Text marginTop={"-0.9rem"}>
                  {data.creator.handle?data.creator.handle:"Random"}  
                </Text>
            </Box>
            <Box  width={"min-content"}>
                <Image width={"3rem"} marginTop={"1rem"}  height={"3rem"} borderRadius={"50%"} src={data.creator.pic} alt="image-icon"/>
            </Box>
        </Box>
        <Box display={"flex"} padding={"0.5rem"} justifyContent={"space-between"}>
        <Box display={"flex"}>
            <Image width={"2rem"} height={"2rem"} src={comment} alt='comment-icon'/>
            <Text>{data.comment.count}</Text>
        </Box>
            
            <Box display={"flex"}>
                <Text>{data.reaction.count}</Text>
                <Image width={"2rem"} height={"2rem"} src={heart} alt='heart-icon'/></Box>
        </Box>
    </Box>
  )
}

export default VideoCard
