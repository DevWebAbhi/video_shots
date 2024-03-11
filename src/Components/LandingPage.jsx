import React, { useEffect } from 'react'
import { 
    Box, Button 
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/LandingPage/action';
import axios from "axios";
import VideoCard from './VideoCard';
import { SET_PAGE } from '../Redux/LandingPage/actionType';
const LandingPage = () => {
  const selector=useSelector(store=>store.landingPageReducer);
  const dispatch=useDispatch();
  const [isLargerThan1299] = useMediaQuery('(min-width: 1299px)');
  const [isLargerThan1050] = useMediaQuery('(min-width: 1050px)');
  const [isLargerThan790] = useMediaQuery('(min-width: 790px)');
  const [isLargerThan540] = useMediaQuery('(min-width: 540px)');

  function handlePage(e){
    const page=Number(selector.page);
    console.log(page)

    if(e.target.name=="minus"){
      if(page==0){
        return;
      }
      dispatch({type:SET_PAGE,payload:page-1});
      dispatch(getData(page-1));
    }else{
      if(page==10){
        return;
      }
      dispatch({type:SET_PAGE,payload:page+1});
      dispatch(getData(page+1));
    }
  }


  useEffect(()=>{
    dispatch(getData(0));
    
  },[])

  return (
    <>
    <Box display={"grid"} gridTemplateColumns={isLargerThan1299?"repeat(5,1fr)":isLargerThan1050?"repeat(4,1fr)":isLargerThan790?"repeat(3,1fr)":isLargerThan540?"repeat(2,1fr)":"repeat(1,1fr)"} width={"max-content"} margin={"auto"} gridGap={"1rem"} marginTop="2rem" >
       {
        selector.Data?<>
        {
          selector.Data.map((e,idx)=>(
            <VideoCard key={idx} idx={idx} data={e} />
          ))
        }
        </>:<></>
       }
    </Box>
    <Box  display={"flex"} width={"6rem"} margin="auto" justifyContent={"space-between"}>
       <Button  background={"transparent"} marginTop={"2rem"} display={"block"} padding={"0.3rem 0.6rem"}   name="minus" onClick={handlePage} >--</Button>
       <Button  background={"transparent"} marginTop={"2rem"} display={"block"} padding={"0.3rem 0.4rem"}>{selector.page}</Button>
       <Button  background={"transparent"} marginTop={"2rem"} display={"block"} padding={"0.3rem 0.4rem"}  name="plus" onClick={handlePage}>++</Button>
    </Box>
    </>
  )
}

export default LandingPage
