import TopicBarStyle from "../resources/TopicBarStyle"
import { getArticleByTopic } from "../api"

function TopicsBar(props){
const {articles, setArticles} = props

    function handleClickCoding(articles){
   getArticleByTopic("coding").then((data)=>{
    setArticles(data)

   })
    }
    function handleClickFootball(articles){
        getArticleByTopic("football").then((data)=>{
         setArticles(data)
})
}
function handleClickCooking(articles){
    getArticleByTopic("cooking").then((data)=>{
     setArticles(data)
})
}

    return(

    
        <>
        <TopicBarStyle>
        <div className="topcoat-button-bar full">
        <div className="topcoat-button-bar__item">
          <button onClick={()=>{handleClickCoding(articles)}} className="topcoat-button-bar__button full">Coding</button>
        </div>
        <div className="topcoat-button-bar__item">
          <button onClick={()=>{handleClickFootball(articles)}} className="topcoat-button-bar__button full">Football</button>
        </div>
        <div className="topcoat-button-bar_
     _item">
          <button onClick={()=>{handleClickCooking(articles)}} className="topcoat-button-bar__button full">Cooking</button>
        </div>
     </div>
     <div className="spacer">

     </div>
     </TopicBarStyle>
     </>
    )
}

export default TopicsBar