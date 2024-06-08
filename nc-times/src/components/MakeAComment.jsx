import { useEffect, useState } from "react"
import { postArticleById } from "../api";
import ErrorPage from "./ErrorPage";

function MakeAComment({ article_id, comments, setComments }) {
    const [newComment, setNewComment] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError]= useState(null)

    function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)


        const commentData = {
            username: "jessjelly",
            body: newComment,
            author: "jessjelly",
            created_at: "just now",
            votes: 0
            
        }
        postArticleById(article_id, commentData).catch((err)=>{
           setIsError(err)
        })
        setComments((currComments)=>{
          return [commentData, ...currComments]
        
        })
    
        setNewComment('')

    }
    useEffect(()=>{},[])

    if(isError){return <ErrorPage/>}

    return (
        <form
            onSubmit={(event) => { handleSubmit(event) }}>
            <label className="commentBox" htmlFor="comment-input">
                Any comments?
            </label>
            <input
                type="text"
                id="comment-intput"
                value={newComment}
                onChange={(event) => {
                    setNewComment(event.target.value)

                }}
                required

            />
            <button title="Post a comment" className="button-85">{isLoading ? (<>Posting</>) : (<>Post</>)} </button>


        </form>
    )

}
export default MakeAComment