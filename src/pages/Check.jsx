import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Check = () => {
const [sortBy,setsortby]=useState("")
const [data,setdata]=useState([])
const handlechange=(e)=>{
    setsortby(e.target.value)
} 

const getdata=(sortBy)=>{
    axios.get(`http://localhost:8080/products`,{
       params:{
        _sort:"price",
        _order:sortBy
       }
    }).then((res)=>{
        setdata(res.data)
    })
}

useEffect(()=>{
getdata(sortBy)
},[sortBy])
console.log(data)
  return (
    <div>
      <select onChange={handlechange}>
        <option>Selection the option</option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>

      {data.map((item)=>(
        <div key={item.id}>
        <img src={item.image}/>
        <h1>{item.price}</h1>
        </div>
      ))}
    </div>
  )
}

export default Check
