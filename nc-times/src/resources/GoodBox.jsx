import './resourcesStyles/GoodBox.css'
function GoodBox(props){
const { children} = props
return(
<div className="goodBox"> {children}</div>

)

}
export default GoodBox