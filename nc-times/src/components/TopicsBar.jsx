import TopicBarStyle from "../resources/TopicBarStyle"

function TopicsBar(){
    return(

        <>
        <TopicBarStyle>
        <div class="topcoat-button-bar full">
        <div class="topcoat-button-bar__item">
          <button class="topcoat-button-bar__button full">Coding</button>
        </div>
        <div class="topcoat-button-bar__item">
          <button class="topcoat-button-bar__button full">Football</button>
        </div>
        <div class="topcoat-button-bar_
     _item">
          <button class="topcoat-button-bar__button full">Cooking</button>
        </div>
     </div>
     <div class="spacer">

     </div>
     </TopicBarStyle>
     </>
    )
}

export default TopicsBar