
import axios from "axios"
import {   GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actiontypes"

export const postrequest=()=>{
    return {type:PRODUCT_REQUEST}
}

export const postsuccess=(payload)=>{
    return {type:POST_PRODUCT_SUCCESS,payload}
}
export const postfailure=()=>{
    return {type:PRODUCT_FAILURE}
}
export const getsuccess=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}

}
export const addproducts=(products)=>(dispatch)=>{
    dispatch(postrequest())
    axios.post(`http://localhost:8080/products`,products)
    .then((res)=>{
        dispatch(postsuccess())
    })
    .catch(()=>{
        dispatch(postfailure())
    })
}

export const getproducts=(ob)=>(dispatch)=>{
    console.log(ob)
    dispatch(postrequest())
    axios.get(`http://localhost:8080/products`,ob)
    .then((res)=>{
        
        dispatch(getsuccess(res.data))
    })
    .catch(()=>{
        dispatch(postfailure())
    })
}