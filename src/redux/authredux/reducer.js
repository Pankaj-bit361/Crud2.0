import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype";

const initstate={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}

export const reducer=(state=initstate,{type,payload})=>{
switch(type){
 case LOGIN_REQUEST:{
    return {
        ...state,isLoading:true
    }
 }
 case LOGIN_SUCCESS:{
    return {
        ...state,isLoading:false,token:payload,isAuth:true
    }
 }
 case LOGIN_FAILURE:{
    return {
        ...state,isLoading:false,isAuth:false,isError:true
    }
 }
 default:{
    return state
 }
}

}