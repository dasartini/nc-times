import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Routes , Route } from 'react-router-dom'
import AllArticles from './components/AllArticles'
// import { useEffect } from 'react'
import ArticleById from './components/ArticleById'

function App() {
// const [loading ,setLoading] = useEffect(false)


  return (
    <>
    <NavBar/>
   
  
    <Routes>
  
   <Route path='/' element ={<Home/>}/>
   <Route path='/AllArticles' element={<AllArticles/>}/>
   <Route path='/AllArticles/:article_id' element={<ArticleById/>}/>



 
   
    </Routes>
    </>
  )
}

export default App
