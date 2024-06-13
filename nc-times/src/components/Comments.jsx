import { useContext, useEffect, useState } from "react";
import { getCommentsByArticleId, deleteCommentById, getAllUsers } from "../api";
import CommentBox from '../resources/CommentBox'
import { LogInContext } from "../context/LogIn";

function Comments({ article_id, username, comments, setComments }) {
    const [avatars, setAvatars] = useState({})
    const {logIn} = useContext(LogInContext)

    useEffect(() => {
        getCommentsByArticleId(article_id).then((data) => {
            setComments(data);

            getAllUsers().then((users) => {
                const avatarMap = {}
                users.forEach(user => {
                    avatarMap[user.username] = user.avatar_url
                });
                setAvatars(avatarMap);
            })
        })
    }, [article_id, setComments])

    function handleDelete(commentId) {
        deleteCommentById(commentId).then((data) => {
            setComments(comments.filter(comment => comment.comment_id !== commentId))
        })
    }

    return (
        <>
            <h3>Comments on this post:</h3>
            <div>
                {comments.map((comment) => {
                    const avatarUrl = avatars[comment.author] || 'default_avatar_url'

                    return (
                        <CommentBox key={comment.comment_id} className="commentBox">
                        <img className="avatar" src={avatarUrl} alt={`${comment.author}'s avatar`} />
                        <div className="commentDetails">
                            <div className="commentAuthor">
                                {comment.author} {comment.created_at === "just now" ? "" : "at"} {comment.created_at}
                            </div>
                            <div className="commentBody">
                                {comment.body}
                            </div>
                        </div>
                        {logIn === comment.author && (
                            <button className="deleteButton" onClick={() => handleDelete(comment.comment_id)}>❌</button>
                        )}
                    </CommentBox>
                    )
                })}
            </div>
        </>
    )
}

export default Comments;
