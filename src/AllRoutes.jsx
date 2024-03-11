import React from 'react'
import {Routes,Route} from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Details from './Components/Details';
const AllRoutes = () => {
  return (
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path=':id' element={<Details/>}/>
    </Routes>
    
  )
}

export default AllRoutes
