import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import CommentBox from "../resources/CommentBox";

function Comments({ article_id }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then((data) => {
                setComments(data);
            });
    }, []);

    return (
       
        <div>
           {comments.map((comment)=>{
            return (
            <ul>
                <h5>{comment.author} at {comment.created_at}</h5>
                <p>{comment.body}</p>
                <button><img className="like" src="https://i.pinimg.com/736x/8f/70/d4/8f70d42e7bd7d3a74e74e895b36293d4.jpg"></img></button> {comment.votes}<button><img className="like" src="https://i.imgflip.com/2qui05.jpg"></img></button>
            </ul>
            )
           })}
        </div>
    );
}

export default Comments;

