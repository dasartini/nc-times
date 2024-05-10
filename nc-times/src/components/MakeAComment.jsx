import { useEffect, useState } from "react"
import { postArticleById } from "../api";


function MakeAComment({ article_id, comments, setComments }) {
    const [newComment, setNewComment] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError]= useState(false)

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
           setIsError(true)
        })
        setComments((currComments)=>{
          return [commentData, ...currComments]
        
        })
    
        setNewComment('')

    }
    useEffect(()=>{},[])

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

            />
            <button title="Post a comment" className="button-85">{isLoading ? (<>Pasting</>) : (<>Post</>)} </button>


        </form>
    )

}
export default MakeAComment