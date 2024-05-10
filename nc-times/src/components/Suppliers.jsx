import React, { useEffect } from "react"
import Select from "react-select"
import { getAllArticles } from "../api"


function Suppliers(props) {
    const {  setArticles, query, setSequence, show, setShow} = props
    const options = [
        { value: 'votes', label: 'Votes' },
        { value: 'created_at', label: 'Date' },
        { value: 'comment_count', label: 'Comment count' }
    ]
    function handleSelect(event) {

        setSequence(event.value)
        const validQuery = event.value
  
        getAllArticles(query, validQuery).then((data) => { setArticles(data) })
        setShow(true)
    }

    return (
        <div className="Suppliers-container">
            <Select options={options}
                onChange={handleSelect} />

        </div>

    )
}

export default Suppliers