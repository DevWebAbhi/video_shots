import React, { useEffect,useState } from 'react'
import { 
    Box ,
    Heading,
    Image,
    Text,
    Input,
    Button
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import { VideoPlayer, VideoPlayerProps } from "@graphland/react-video-player";
import { useParams } from 'react-router-dom'
import { useMediaQuery } from '@chakra-ui/react';
const Details = () => {
    const{id} =useParams();
    const [isLargerThan1299] = useMediaQuery('(min-width: 950px)');
    const [isLargerThan450] = useMediaQuery('(min-width: 450px)');
    const selector=useSelector(store=>store.landingPageReducer);
    const dispatch=useDispatch();
    const [like,setLike]=useState({like:false,count:0});




    const videoSources = [
        {
          src: `${selector.Data[id]?selector.Data[id].submission.mediaUrl:""}`,
          type: "video/mp4",
        },
        
      ];
      
      const videoProps = {
        theme: "forest", 
        height: 450,
        width: 280,
        autoPlay: false,
        loop: false,
        sources: videoSources,
        controlBar: {
          
        },
        
        disablePictureInPicture: false,
        
      };

      function handleLike(){
        if(like.like){
            
            localStorage.setItem(`likesShots${selector.Data[id].postId}`,JSON.stringify({like:false,count:like.count-1}));
            setLike({like:false,count:like.count-1});
        }else{
            
            localStorage.setItem(`likesShots${selector.Data[id].postId}`,JSON.stringify({like:true,count:like.count+1}));
            setLike({like:true,count:like.count+1});
        }
      }

      

      useEffect(()=>{
        const likeData=JSON.parse(localStorage.getItem(`likesShots${selector.Data[id].postId}`));
        console.log(likeData)
        if(likeData!=undefined && likeData!=null){
            setLike({like:likeData.like,count:likeData.count});
        }else{
            localStorage.setItem(`likesShots${selector.Data[id].postId}`,JSON.stringify(like));
        }
      },[])
    
  return (
    <Box marginTop={"2rem"} display={isLargerThan1299?"flex":"block"} padding={"1rem"}>
        <Box width={"max-content"} borderRadius={"0.5rem"} >
        <VideoPlayer {...videoProps} />
        </Box>
        <Box padding={"0.5rem"}>
            <Heading color="black" padding={"0.5rem"}  textAlign={"start"} fontWeight={"500"}  fontSize={"1.9rem"}>{selector.Data[id]?selector.Data[id].submission.title:""}</Heading>
            <Text padding={"0.5rem"} fontSize={"x-large"} textAlign={"start"}>{selector.Data[id]?selector.Data[id].submission.description:""}</Text>
            <Box  display={"flex"} justifyContent={"space-between"} textAlign={"start"} padding={"0.5rem"} width={"max-content"} minW={"10rem"}>
            <Box>
                <Text color="white">
                    {selector.Data[id]?selector.Data[id].creator.name:"Random"}
                </Text>
                <Text >
                  {selector.Data[id]?selector.Data[id].creator.handle:"Random"}  
                </Text>
            </Box>
            <Box  width={"min-content"}>
                <Image width={"3rem"} marginTop={"1rem"} height={"3rem"} borderRadius={"50%"} src={selector.Data[id]?selector.Data[id].creator.pic:""} alt="image-icon"/>
            </Box>
          
        </Box>
        <Box  width={"5rem"} display={"flex"}>
                <Text _hover={{cursor:"pointer"}} marginRight={"1rem"} fontSize={"large"} color={like.like?"blue":"white"} onClick={handleLike}>Like</Text><Text fontSize={"large"} marginTop={"1.3rem"}>{like.count}</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default Details
