import React, { useEffect } from 'react'
import { 
    Box ,
    Heading,
    Image,
    Text
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import { VideoPlayer, VideoPlayerProps } from "@graphland/react-video-player";
import { useParams } from 'react-router-dom'
const Details = () => {
    const{id} =useParams();
    const selector=useSelector(store=>store.landingPageReducer);
    const dispatch=useDispatch();
    useEffect(()=>{
        console.log(selector)
    },[])


    const videoSources = [
        {
          src: `${selector.Data[id]?selector.Data[id].submission.mediaUrl:""}`,
          type: "video/mp4",
        },
        
      ];
      
      const videoProps = {
        theme: "forest", 
        height: 500,
        width: 400,
        autoPlay: false,
        loop: false,
        sources: videoSources,
        controlBar: {
          skipButtons: {
            forward: 5,
            backward: 5,
          },
        },
        playbackRates: [0.5, 1, 1.5, 2],
        disablePictureInPicture: false,
        onReady: () => {
          console.log("Video player is ready!");
        },
      };
    
  return (
    <Box marginTop={"2rem"} display={"flex"} padding={"1rem"}>
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
        </Box>
    </Box>
  )
}

export default Details
