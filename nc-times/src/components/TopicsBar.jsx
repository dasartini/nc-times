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
        <div className="topcoat-button-bar full">
          <div className="topcoat-button-bar__item">
            <button onClick={() => { handleClick("coding") }} className="topcoat-button-bar__button full">Coding</button>
          </div>
          <div className="topcoat-button-bar__item">
            <button onClick={() => { handleClick("football") }} className="topcoat-button-bar__button full">Football</button>
          </div>
          <div className="topcoat-button-bar_item">
            <button onClick={() => { handleClick("cooking") }} className="topcoat-button-bar__button full">Cooking</button>
          </div>
        </div>
      </TopicBarStyle>
      <Suppliers articles={articles} setArticles={setArticles} query={query} sequence={sequence} setSequence={setSequence} show={show} setShow={setShow} />
      {show? (<SortButtons articles={articles} setArticles={setArticles} query={query} sequence={sequence}/>): (<>XD</>)}

      

    </>
  )
}

export default TopicsBar