

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivatesRoutes = ({children}) => {
  const {isAuth}=useSelector((state)=>state.authreducer)
if(!isAuth){
    return <Navigate to="/login"/>
}
return children
}

export default PrivatesRoutes
