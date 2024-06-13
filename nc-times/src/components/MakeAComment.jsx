import { useEffect, useState, useContext } from "react"
import { postArticleById } from "../api";
import ErrorPage from "./ErrorPage";
import { LogInContext } from "../context/LogIn";
import { LogInStatusContext } from "../context/LoginStatus";
import InputCommentBox from "../resources/InputCommentBox"; 


function MakeAComment({ article_id, comments, setComments }) {
    const [newComment, setNewComment] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)
    const { logIn } = useContext(LogInContext)
    const { isLogIn } = useContext(LogInStatusContext)

    function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)


        const commentData = {
            username: logIn,
            body: newComment,
            author: logIn,
            created_at: "just now",
            votes: 0

        }
        postArticleById(article_id, commentData).catch((err) => {
            setIsError(err)
        })
        setComments((currComments) => {
            return [commentData, ...currComments]

        })

        setNewComment('')
        setIsLoading(false)

    }
    useEffect(() => { }, [])

    if (isError) { return <ErrorPage /> }

    return (
        isLogIn ? (
            <InputCommentBox>
                <div className="commentBox">
                    <form onSubmit={handleSubmit} className="commentInputContainer">
                        <label className="commentLabel" htmlFor="comment-input">
                            Any comments?
                        </label>
                        <input
                            type="text"
                            id="comment-input"
                            className="commentInput"
                            value={newComment}
                            onChange={(event) => setNewComment(event.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            title="Post a comment"
                            className="postButton"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Posting...' : 'Post'}
                        </button>
                    </form>
                </div>
            </InputCommentBox>
        ) : <p>Only logged in Users can make comments...</p>
    )


}
export default MakeAComment