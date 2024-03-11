import axios from "axios";
import { SET_DATA } from "./actionType";


export const getData=(page)=>async(dispatch)=>{
    try {
        const data=await axios.get(`https://internship-service.onrender.com/videos?page=${page}`);
        console.log(data.data.data.posts);
        dispatch({type:SET_DATA,payload:data.data.data.posts})
      } catch (error) {
        console.log(error);
      }
}