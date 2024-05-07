import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getArticleById, patchArticleById } from "../api"
import GoodBox from "../resources/GoodBox"
import Loading from "../resources/Loading"
import Comments from "./Comments"


function ArticleById() {

    const [loading, setLoading] = useState(true);
    const [articleId, setArticleId] = useState({})
    const { article_id } = useParams()

    useEffect(() => {
        setLoading(true)
        getArticleById(article_id)
            .then((articleData) => {
                setLoading(false)
                setArticleId(articleData)
            })
    }, [])
    function clicker(){
patchArticleById(article_id)
.then((data)=>{
    console.log(article_id)
})
    }

    return (
        <>{loading ? (<><Loading /></>) : (
            <GoodBox>
                <div className="single-article">
                    <h3>{articleId.title}</h3>
                    <img src={articleId.article_img_url}></img>
                    <h4>By: {articleId.author}<br></br>
                        Topic: {articleId.topic}
                    </h4>
                    <p>{articleId.body}</p>
                    <p>Posted at: {articleId.created_at}</p>
                    <p>Did you like this article?</p>
                    <button onClick={clicker} title="Up vote me!" className="upVote">{articleId.votes}</button>
                    <p>{articleId.votes} People like this article</p>
                    <Comments article_id={article_id} />
                    <Link to={'/AllArticles'}> <button> Go back</button></Link>
                </div>
            </GoodBox>
        )}
        </>
    )
}
export default ArticleById