import TopicBarStyle from "../resources/TopicBarStyle"
import { getAllArticles } from "../api"
import Suppliers from "./Suppliers"
import { useEffect } from "react"

function TopicsBar(props) {
  const { articles, setArticles } = props

  function handleClick(event) {

    getAllArticles(event).then((data) => {
      setArticles(data)
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
      <Suppliers articles={articles} setArticles={setArticles} />

    </>
  )
}

export default TopicsBar