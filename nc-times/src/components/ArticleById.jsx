import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getArticleById, patchArticleById } from "../api"
import GoodBox from "../resources/GoodBox"
import Loading from "../resources/Loading"
import Comments from "./Comments"
import MakeAComment from "./MakeAComment"
import ErrorPage from "./ErrorPage"

function ArticleById() {
    const [comments , setComments] = useState([])
    const [loading, setLoading] = useState(true);
    const [articleId, setArticleId] = useState({})
    const [like, setLike] = useState('')
    const { article_id, comment_id } = useParams()
    const [username ,setUsername]=useState("jessjelly")
    const [error, setError]= useState(null)

    useEffect(() => {
        setLoading(true)
        getArticleById(article_id)
            .then((articleData) => {
                setLike(articleData.votes)
                setLoading(false)
                setArticleId(articleData)
            }).catch((err)=>{
                setError(err)
            })
    }, [])

    function handleVote(vote){
patchArticleById(article_id, vote).then((data)=>{
setLike(data)
})
    }
if(error){ return <ErrorPage/> }
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
                    <button onClick={()=>{handleVote(1)}} title="Up vote me!" className="button-85">Like</button>
                    <button onClick={()=>{handleVote(-1)}} title="Down vote me!" className="button-85"> No Like</button>
                    <p>{like} People like this article</p>
                    <MakeAComment comments={comments} setComments={setComments} article_id={article_id}/>
                    <Comments comments={comments} setComments={setComments} username={username} article_id={article_id} comment_id={comment_id} />
                    <Link to={'/AllArticles'}> <button> Go back</button></Link>
                   
                </div>
            </GoodBox >
        )}
        </>
    )
}
export default ArticleById