import { SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getproducts } from '../redux/productredux/action'
import ProductCard from './ProductCard'

const ProductList = () => {
  const location=useLocation()
const [serachparams]=useSearchParams()

const {products}=useSelector((state)=>state.productReducer)

const dispatch=useDispatch()




useEffect(()=>{

  let sortBy=serachparams.get("sortBy")

let ob={
  params:{
    category:serachparams.getAll("category"),
    _sort:"price",
    _order:sortBy
  }

}

dispatch(getproducts(ob))

},[location.search])

  return (
    <div>
    
      <SimpleGrid columns={[1,2,3,4]} spacing={10} m={10} >
    {products.map((item)=>(
<div key={item.id}>

      <ProductCard  {...item}/>
</div>
    ))}
    </SimpleGrid>
    </div>
  )
}

export default ProductList
