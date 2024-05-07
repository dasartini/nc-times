import { useState, useEffect } from "react"
import { getAllArticles } from "../api"
import GoodBox from "../resources/GoodBox"
import { Link } from "react-router-dom"

function AllArticles(){

const [articles , setArticles] = useState([])
useEffect(()=>{
    getAllArticles()
    .then((data)=>{
       
        setArticles(data)
        
    })
}, [])
    


return(
<div>
<ul >
    {articles.map((article)=>{
        return (
          
            <div key={article.article_id}>
        <GoodBox>
        
            <img src={article.article_img_url}></img >       
       <h4>{article.title}</h4>
            <p>Author: {article.author}</p>
            <p>Votes: {article.votes}</p>
           <Link to={`/AllArticles/${article.article_id}`}> <p>Read full </p></Link>
        
        </GoodBox>
        </div>
        
    )}
 )}
 

</ul>

</div>
)

}
export default AllArticles