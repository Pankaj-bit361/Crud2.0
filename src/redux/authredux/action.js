import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype"

export const loginrequest=()=>{
return {type:LOGIN_REQUEST}
}
export const loginsuccess=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}

export const loginfailure=()=>{
    return {type:LOGIN_FAILURE}
}

export const login=(ob)=>(dispatch)=>{
    dispatch(loginrequest())
axios.post(`https://reqres.in/api/login`,ob)
.then((res)=>{
    dispatch(loginsuccess(res.data.token))
})
.catch(()=>{
    dispatch(loginfailure())
})
}