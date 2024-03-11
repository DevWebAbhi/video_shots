import React from 'react'
import {Routes,Route, BrowserRouter} from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Details from './Components/Details';
const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path=':id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
