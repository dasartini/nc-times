import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Routes , Route } from 'react-router-dom'
import AllArticles from './components/AllArticles'
import ArticleById from './components/ArticleById'
import Login from "./components/Login"
import { LoggingStatusProvider} from './context/LogingStatus'

function App() {


  return (
    
    <>
<LoggingStatusProvider>
    <NavBar/>
   
  
    <Routes>
  
   <Route path='/' element ={<Home/>}/>
   <Route path='/AllArticles' element={<AllArticles/>}/>
   <Route path='/AllArticles/:article_id' element={<ArticleById/> }/>
   <Route path='/Login' element={<Login/> }/>


 
   
    </Routes>
    </LoggingStatusProvider>
    </>
  )
}

export default App
