import React, { useEffect } from "react"
import Select from "react-select"
import { getArticlesQuery } from "../api"
function Suppliers(props){
    const {articles, setArticles} = props
    const options = [
        { value: 'votes', label: 'Votes' },
        { value: 'created_at', label: 'Date' },
        { value: 'comment_count', label: 'Comment count' }
      ]
function handleSelect(event){

    const validQuery = event.value
    console.log(validQuery)
    getArticlesQuery(validQuery).then((data)=>{
        setArticles(data)
    })



}

return (
<div className= "Suppliers-container">
<Select options={options}
onChange={handleSelect}/>

</div>

)
}

export default Suppliers