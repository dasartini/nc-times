import { useState, useEffect } from "react"
import { getAllArticles } from "../api"
import GoodBox from "../resources/GoodBox"
import { Link } from "react-router-dom"
import Loading from "../resources/Loading"

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
                        <div key={article.article_id}>
                            <GoodBox>
                                <img src={article.article_img_url} alt="Article" />
                                <h4>{article.title}</h4>
                                <p>Author: {article.author}</p>
                                <p>Votes: {article.votes}</p>
                                <Link to={`/AllArticles/${article.article_id}`}><p>Read full </p></Link>
                            </GoodBox>
                        </div>
                    ))}
                </ul>
            </div>
            )}
    </>
    )
}

export default AllArticles;
