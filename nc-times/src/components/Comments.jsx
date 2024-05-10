import { useEffect, useState } from "react";
import { getCommentsByArticleId, deleteCommentById } from "../api";
import CommentBox from "../resources/CommentBox";
import MakeAComment from "./MakeAComment";

function Comments({ article_id, username ,comments, setComments}) {

    useEffect(() => {

        getCommentsByArticleId(article_id)
            .then((data) => {
                setComments(data);
            });

    }, [setComments]);
    function handleDelete(commentId) {
        deleteCommentById(commentId)
            .then((data) => {
                console.log("Comment deleted successfully:", data);
                console.log(commentId)
                setComments(comments.filter(comment => comment.comment_id !== commentId))

            })
    }



    return (
        <>
            <h3>Comments on this post:</h3>
            <div>
                {comments.map((comment) => {
                    return (
                        <ul key={comment.comment_id}>
                            <h5>{comment.author} {comment.created_at === "just now"? "": "at"} {comment.created_at} {username === comment.author ? (<><button onClick={() => handleDelete(comment.comment_id)}>
                                X</button></>) : (<></>)}</h5>
                            <p>{comment.body}</p>
                            <button ><img className="like" src="https://i.pinimg.com/736x/8f/70/d4/8f70d42e7bd7d3a74e74e895b36293d4.jpg"></img></button> {comment.votes}<button><img className="like" src="https://i.imgflip.com/2qui05.jpg"></img></button>
                        </ul>
                    )
                })}

            </div>

        </>
    );
}

export default Comments;

