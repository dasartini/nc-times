import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Routes , Route } from 'react-router-dom'
import AllArticles from './components/AllArticles'
function App() {

  return (
    <>
    <NavBar/>
   
  
    <Routes>
   <Route path='/' element ={<Home/>}/>
   <Route path='/AllArticles' element={<AllArticles/>}/>


 
   
    </Routes>
    </>
  )
}

export default App
