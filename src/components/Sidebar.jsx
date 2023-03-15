import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Sidebar = () => {


  const [serachparams, setserachParams] = useSearchParams()
  const init = serachparams.getAll("category")
  const init2=serachparams.get("sortBy")
  const [category, setCategory] = useState(init || [])
  const [sortBy ,setsorting] = useState(init2||"")



  //Filtering------------->

  const handlechange = (e) => {
    const value = e.target.value
    let newCategory = [...category]

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value)
    } else {
      newCategory.push(value)
    }

    setCategory(newCategory)
  }

  //<----------------------


  //Sorting---------->
  const handlesort = (e) => {
    let val = e.target.value
   if(val===sortBy){
    setsorting(null)
   }else{
    setsorting(val)
   }
  }
  //<-------------------


  console.log(sortBy)



  //UseEffect---->
  useEffect(() => {
    if(category || sortBy){

      let params = {}
      category && (params.category=category)
      sortBy && (params.sortBy=sortBy)
      setserachParams(params)
    }
  }, [category,sortBy])

  //<----------

  return (
    <div style={{ magrinTop: "2%" }}>
      <h1 style={{ margin: "5%" }}>Filter By Category</h1>
      <div style={{ textAlign: "left", marginLeft: "20%" }}> <input type="checkbox" value={"male"} checked={category.includes("male")} onChange={handlechange} />
        <label>Mens</label></div>

      <div style={{ textAlign: "left", marginLeft: "20%" }}> <input type="checkbox" value={"female"} checked={category.includes("female")} onChange={handlechange} />
        <label>Womens</label></div>

      <div style={{ textAlign: "left", marginLeft: "20%" }}> <input type="checkbox" value={"kids"} checked={category.includes("kids")} onChange={handlechange} />
        <label>Kids</label></div>

      <h1 style={{ margin: "5%" }}>Sort By Price</h1>


      <div style={{ textAlign: "left", marginLeft: "20%", display:'flex' }}>
      <div>
         <input type="radio" name="sortBy" value={"asc"} checked={sortBy.includes("asc")} onChange={handlesort} />
          <label>ASC</label>
        <br/>
<br/>
          <input type="radio" name='sortBy' value={"desc"} checked={sortBy.includes("desc")} onChange={handlesort} />
          <label>DESC</label>
      </div>
      </div>
    </div>




  )
}

export default Sidebar
