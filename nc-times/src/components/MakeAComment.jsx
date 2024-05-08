import { useEffect, useState } from "react"
import { postArticleById } from "../api";


function MakeAComment({ article_id }) {
    const [newComment, setNewComment] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)

        const commentData = {
            username: "jessjelly",
            body: newComment
        }
        postArticleById(article_id, commentData)
            .then((data) => {
                setNewComment('')
                setIsLoading(false)
            })


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