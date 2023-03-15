import { Box, Button, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

import axios from "axios"
import { useDispatch } from 'react-redux'
import { addproducts } from '../redux/productredux/action'
const init={
    title:"",
    image:"",
    price:"",
    brand:"",
    discount:""

}

const Admin = () => {
const [products,setproducts]=useState(init)
const dispatch =useDispatch()
const handlechange=(e)=>{

const {name,value}=e.target
setproducts((prev)=>(
    {...prev,[name]:value}
))

}
const handlesubmit=(e)=>{
e.preventDefault()
dispatch(addproducts(products))
setproducts(init)
}

  return (
    <Box>
    <form onSubmit={handlesubmit}>
      <Input type="text" name="title" value={products.title} onChange={(e)=>handlechange(e)} placeholder="Enter the title"/>
      <Input  type="text" name="image" value={products.image} onChange={(e)=>handlechange(e)} placeholder="Enter the image"/>
      <Input type="number" name="price" value={products.price} onChange={(e)=>handlechange(e)} placeholder="Enter the price"/>
      <Input type="text" name="brand" value={products.brand} onChange={(e)=>handlechange(e)} placeholder="Enter the brand"/>
      <Input type="number" name="discount" value={products.discount} onChange={(e)=>handlechange(e)} placeholder="Enter the discount"></Input>
      <Select name="category" onChange={(e)=>handlechange(e)} value={products.category}>
        <option value="">Select Gender</option>
        <option value="male">Men</option>
        <option value="female">Women</option>
        <option value="kids">kids</option>
      </Select>
      <Button type="submit">Add Products</Button>
      </form>
    </Box>
  )
}

export default Admin
