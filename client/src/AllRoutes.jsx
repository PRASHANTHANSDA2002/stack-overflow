import React from 'react'

import { Routes , Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import Plans from './Pages/Plans/Plans'

const AllRoutes = () => {
  return (
   <Routes>
    <Route exact path='/' Component={Home}/>
    <Route path='/Auth' Component={Auth}/>
    <Route path = '/Questions' Component ={Questions}/>
    <Route path = '/AskQuestion' Component ={AskQuestion}/>
    <Route exact path = '/Questions' Component ={DisplayQuestion}/>
    <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
    <Route path = '/Tags' element={<Tags/>} />
    <Route path = '/Users' element={<Users/>} />
    <Route path = '/Plans' Component ={Plans}/>
    <Route path = '/Users/:id' element={<UserProfile/>} />
   </Routes> 
  )
}

export default AllRoutes
