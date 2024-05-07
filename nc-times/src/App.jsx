import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Routes , Route } from 'react-router-dom'
import AllArticles from './components/AllArticles'
import ArticleById from './components/ArticleById'

function App() {


  return (
    <>
    <NavBar/>
   
  
    <Routes>
  
   <Route path='/' element ={<Home/>}/>
   <Route path='/AllArticles' element={<AllArticles/>}/>
   <Route path='/AllArticles/:article_id' element={<ArticleById/> }/>


 
   
    </Routes>
    </>
  )
}

export default App
