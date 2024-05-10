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
            <button title="Descending order" onClick={() => { handleClickOrder("DESC") }} className="button-85"> Sort by DESC</button>
            <button title="Ascending order" onClick={() => { handleClickOrder("ASC") }} className="button-85"> Sort by ASC</button>

        </>)


}

export default SortButtons