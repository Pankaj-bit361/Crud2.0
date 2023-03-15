import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box style={{display:"flex",justifyContent:"space-around"}} bg={"black"} color={'white'} p={"10px"}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/products">products</Link>
      <Link to="/admin">Admin</Link>
    </Box>
  )
}

export default Navbar
