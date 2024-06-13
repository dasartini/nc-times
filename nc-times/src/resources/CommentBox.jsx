import './resourcesStyles/CommentBox.css'
function CommentBox(props){
    
    const { children} = props
    return(
    <div className="commentBox"> {children}</div>
    
    
)
}
export default CommentBox