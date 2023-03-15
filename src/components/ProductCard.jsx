import React from 'react'
import { useSelector} from 'react-redux'
import {SimpleGrid,Image,Text, Center,Box} from "@chakra-ui/react"
const ProductCard = ({id,title,image,category,price,brand,discount}) => {
const products=useSelector((state)=>state)


  return (
    <Box h={"550px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"}  style={{textAlign:Center}}>
    
<Center><Image w={"100%"} h={"300px"} src={image}/></Center>

<Center><Text fontSize={"24px"}>Name:{title}</Text></Center>
<Center><Text fontSize={"20px"}>Brand: {brand}</Text></Center>
   <Center><Text fontSize={"16px"}>Category:{category}</Text></Center> 
    <Center><Text fontSize={"16px"}>Price:{price}</Text></Center>
   <Center> <Text fontSize={"16px"}>Discount: {discount}</Text> </Center>   </Box>
  )
}

export default ProductCard
