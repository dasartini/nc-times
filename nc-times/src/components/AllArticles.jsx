import { useState, useEffect } from "react"
import { getAllArticles } from "../api"
import GoodBox from "../resources/GoodBox"

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
        
        </GoodBox>
        </div>
    )}
 )}
 

</ul>

</div>
)

}
export default AllArticles