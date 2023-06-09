import {  GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actiontypes"

const initstate={
    isLoading:false,
    isError:false,
    products:[]
}
export const reducer=(state=initstate,{type,payload})=>{

switch(type){
    case PRODUCT_REQUEST:{
        return {
        ...state,isLoading:true}
    }
    case POST_PRODUCT_SUCCESS:{
        return {
            ...state,isLoading:false
        }
    }
    case PRODUCT_FAILURE:{
        return {
            ...state,isLoading:false,isError:false
        }
    }
    case GET_PRODUCT_SUCCESS:{
        return {
            ...state,isLoading:false,products:payload
        }
    }
    default:{
        return state
    }
}

}