import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Loginpage from '../pages/Loginpage'
import Signuppage from '../pages/Signuppage'
import {bottombar, navbtn} from '../assets/index'
import Loginbtn from '../pages/Loginbtn'
import Items from '../pages/Items'
import Sales from '../pages/Sales'
import Empoly from '../pages/Empoly'
import AddItems from '../pages/AddItems'

function Routing() {
  return (
    <>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path={navbtn[0].url} element={<Loginpage/>}/>  
    <Route path={navbtn[1].url} element={<Empoly/>}/>  

    <Route path={navbtn[0].url}>
    <Route path="login" element={<Loginbtn/>}/>
    <Route path="sign-up" element={<Signuppage/>}/>
    </Route>
    <Route path={navbtn[1].url}>
    <Route path='login' element={<Loginbtn/>}/>
    <Route path="sign-up" element={<Signuppage/>}/>
    </Route>
    <Route path="/Admin/login">
      <Route path={bottombar[0].to} element={<Sales/>}/>
      <Route path={bottombar[1].to} element={<Items/>}/>
    </Route>
    <Route path='/Admin/Login/Items'>
    <Route path='AddItems' element={<AddItems/>}/>
    </Route>
    </Routes> 
    </>
  )
}

export default Routing
