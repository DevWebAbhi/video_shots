import { SET_DATA,SET_PAGE } from "./actionType"

const initaialstate={
    page:0,
    Data:[]
}

export const landingPageReducer=(state=initaialstate,{type,payload})=>{
    switch(type){
        case SET_DATA:{return {...state,Data:payload}};
        case SET_PAGE:{return {...state,page:payload}};
        default:{return {...state}}
    }
}