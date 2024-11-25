import { getAllArticles } from "../api";
import { useState, useEffect } from "react";
import ArticleCard from "../resources/ArticleCard";
import Boxie from "../resources/Boxie";
import { Link } from "react-router-dom";
import Loading from "../resources/Loading";

function HomeBox() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllArticles()
      .then((data) => {
        setLoading(false);
        setArticles(data.splice(0, 8));
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

 

  return (
    <Boxie>
      <div className="latestNews">
        {loading? (<Loading/>):
        <div className="image-container">
        {articles.map((article, index) => (
          <Link to={`/AllArticles/${article.article_id}`}>
          <div key={index} className="item">
            <img src={article.article_img_url} alt={article.title} className="itemImage" />
            <p className="itemTitle" title={article.title}>{article.title}</p>
          </div>
          </Link>
        ))}
      </div>
        }
      
      </div>
    </Boxie>
  );
}

export default HomeBox;
