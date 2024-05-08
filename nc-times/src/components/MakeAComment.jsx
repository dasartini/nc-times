import { useEffect, useState } from "react"
import { postArticleById } from "../api";


function MakeAComment({ article_id }) {
    const [newComment, setNewComment] = useState('')
    const [comment, setComment] = useState('')
    const [isLoading, setIsLoading]= useState(false)

    function handleSubmit(event) {
        setIsLoading(true)
        event.preventDefault()
        setComment({
            username: "jessjelly",
            body: newComment
        })
        setNewComment('')
    }

    useEffect(() => {
        postArticleById(article_id, comment).then((data) => {
            setNewComment(comment)
        }).then(()=>{
            setNewComment('')
            setIsLoading(false)
        })
    }, [comment])

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
<button title="Post a comment" className="button-85">{isLoading ? (<>Pasting</>) : (<>Post</>) } </button>


        </form>
    )

}
export default MakeAComment