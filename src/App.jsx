import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Jobpage from './pages/Jobspage'
import NotFound from './pages/NotFound'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/jobpage' element={<Jobpage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

function App() {

  
  return <RouterProvider router={router}/>
}

export default App
