import './resourcesStyles/TopicsBars.css'

function TopicBarStyle(props){
    const {children} = props
    return (<div className="topicBarStyle"> {children}</div>)
}
 
export default TopicBarStyle