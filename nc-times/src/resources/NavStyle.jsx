import './resourcesStyles/NavStyle.css'

function NavStyle(props){
    const { children} = props
    return(
    <div className="nav"> {children}</div>
    
    )
    
    }
    export default NavStyle