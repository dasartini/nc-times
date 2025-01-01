import TopicBarStyle from "../resources/TopicBarStyle"
import { getAllArticles } from "../api"
import Suppliers from "./Suppliers"
import SortButtons from "./SortButton"
import { useEffect, useState } from "react"

function TopicsBar(props) {
  const [show, setShow]= useState(false)
  const [sequence, setSequence]= useState('')
  const { articles, setArticles } = props
  const [query, setQuery] = useState('')
  function handleClick(event) {

    getAllArticles(event).then((data) => {
      setArticles(data)
      setQuery(event)
    })
  }


  return (


    <>
    
      <TopicBarStyle>
        <div className="topicBarCont">
        <h3>Filter articles:</h3>
      <div className="topic-bar">
      <button onClick={() => handleClick("coding")} className="topic-button">
        Coding
      </button>
      <button onClick={() => handleClick("football")} className="topic-button">
        Football
      </button>
      <button onClick={() => handleClick("cooking")} className="topic-button">
        Cooking
      </button>
      </div>
    </div>
      </TopicBarStyle>
      <div className="Suppliers-container">
        <p style={{marginLeft:"10px"}}>Sort by:</p>
      <Suppliers articles={articles} setArticles={setArticles} query={query} sequence={sequence} setSequence={setSequence} show={show} setShow={setShow} />
      {show? (<SortButtons articles={articles} setArticles={setArticles} query={query} sequence={sequence}/>): (<></>)}
      </div>
      

    </>
  )
}

export default TopicsBar