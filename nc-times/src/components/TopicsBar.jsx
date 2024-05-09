import TopicBarStyle from "../resources/TopicBarStyle"
import { getArticleByTopic } from "../api"
import Suppliers from "./Suppliers"
import { useEffect } from "react"

function TopicsBar(props){
const {articles, setArticles} = props

    function handleClickCoding(){
   getArticleByTopic("coding").then((data)=>{
    setArticles(data)

   })
    }
    function handleClickFootball(){
        getArticleByTopic("football").then((data)=>{
         setArticles(data)
})
}
function handleClickCooking(){
    getArticleByTopic("cooking").then((data)=>{
     setArticles(data)
})

useEffect(()=>{setArticles},[articles])
}

    return(

    
        <>
        <TopicBarStyle>
        <div className="topcoat-button-bar full">
        <div className="topcoat-button-bar__item">
          <button onClick={()=>{handleClickCoding()}} className="topcoat-button-bar__button full">Coding</button>
        </div>
        <div className="topcoat-button-bar__item">
          <button onClick={()=>{handleClickFootball()}} className="topcoat-button-bar__button full">Football</button>
        </div>
        <div className="topcoat-button-bar_
     _item">
          <button onClick={()=>{handleClickCooking()}} className="topcoat-button-bar__button full">Cooking</button>
        </div>
     </div>
     </TopicBarStyle>
     <Suppliers articles={articles} setArticles={setArticles} />

     </>
    )
}

export default TopicsBar