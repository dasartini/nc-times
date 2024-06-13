import './resourcesStyles/InputCommentBox.css'
function InputCommentBox(props){
const { children} = props
return(
<div className="inputCommentBox"> {children}</div>

)

}
export default InputCommentBox