import { useState,useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getArticleById } from "../api"
import GoodBox from "../resources/GoodBox"


function ArticleById(){
const [articleId ,setArticleId] = useState({})
const {article_id} = useParams()

useEffect(()=>{
    getArticleById(article_id)
    .then((articleData)=>{
setArticleId(articleData)
    })
}, [])

return(
<GoodBox>
<div className="single-article">
    <h3>{articleId.title}</h3>
    <img src={articleId.article_img_url}></img>
    <h4>By: {articleId.author}<br></br>
    Topic: {articleId.topic}
    </h4>
    <p>{articleId.body}</p>
    <p>Posted at: {articleId.created_at}</p>
   <Link to={'/AllArticles'}> <button> Go back</button></Link>
    </div>
    </GoodBox>
)
}
export default ArticleById