import './resourcesStyles/TitleStyle.css'
function TitleStyle(props){

    const { children} = props
    return(
    <div className="center"> {children}</div>
    
    )
}

export default TitleStyle