import React, { useState } from 'react'
import {Box, Button, Input,FormControl} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/authredux/action'

const Login = () => {
const [email,setemail]=useState("eve.holt@reqres.in")
const [password,setpassowrd]=useState("")
const store=useSelector((state)=>state)
const dispatch=useDispatch()

const handlelogin=(e)=>{
e.preventDefault()
  let ob={email,password}
 
dispatch(login(ob))
}
  return (
    <div>
    <Box margin={50}>

      <form onSubmit={handlelogin} >
    
        <Input type="text" value={email} placeholder="enter your email" onChange={(e)=>setemail(e.target.value)} />
        <Input type="text" value={password} placeholder="enter password" onChange={(e)=>setpassowrd(e.target.value)} />
        <Button colorScheme={"red"} type="submit">Login</Button>
      </form>
    </Box>
    </div>
  )
}

export default Login
