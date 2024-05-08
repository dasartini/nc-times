import { useState, useEffect } from "react"
import { getAllArticles } from "../api"
import Loading from "../resources/Loading"
import ArticleCard from "../resources/ArticleCard"
function AllArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllArticles()
            .then((data) => {
                setLoading(false);
                setArticles(data);
            })
    }, []);

    return (<>
        {loading ? (<><Loading/></>) :
            (<div>
                <ul>
                    {articles.map((article) => (
                       <ArticleCard key={article.article_id} article={article}></ArticleCard>
                    ))}
                </ul>
            </div>
            )}
    </>
    )
}

export default AllArticles;
