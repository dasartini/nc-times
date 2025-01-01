import { getAllArticles } from "../api"


function SortButtons(props) {
    const { articles, setArticles, sequence} = props
    const subject = articles[0].topic

    function handleClickOrder(event) {
        getAllArticles(subject, sequence, event).then((data) => {
            setArticles(data)
            
        })


    }

    return (
        <>
        <div style={{ display:"flex", gap:"10px", alignItems:"center", justifyContent:"center", marginTop:"10px"}}>
            <button title="Descending order" onClick={() => { handleClickOrder("DESC") }} className="topic-button"> Sort by DESC</button>
            <button title="Ascending order" onClick={() => { handleClickOrder("ASC") }} className="topic-button"> Sort by ASC</button>
</div>
        </>)


}

export default SortButtons