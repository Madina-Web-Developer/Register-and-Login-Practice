import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Components/Pages/About'
import Home from './Components/Pages/Home'
import app from './Firebase.config'



function App() {


  const myRoute = createBrowserRouter(
    createRoutesFromElements(

      <Route>

        <Route index element={<Home/>}/>

        <Route path='/about' element={<About/>}/>


      </Route>
    )
  )
 

  return (
    <>

    <RouterProvider router={myRoute}/>
     
    </>
  )
}

export default App
