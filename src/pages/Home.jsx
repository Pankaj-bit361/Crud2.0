import React from 'react'
import ProductList from '../components/ProductList'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div style={{display:'grid', gridTemplateColumns:"repeat(5,1fr)",}}> 
    <div style={{gridColumnStart:1 ,gridColumnEnd:2,border:"1px solid black",margin:"auto",margin:"5%"}}><Sidebar /></div>
    <div style={{gridColumnStart:2 ,gridColumnEnd:6 ,border:"1px solid black" ,margin:"1%"}}>  <ProductList  /></div>
    
    </div>
  )
}

export default Home
