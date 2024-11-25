import { getAllArticles } from "../api";
import { useState, useEffect } from "react";
import ArticleCard from "../resources/ArticleCard";
import Boxie from "../resources/Boxie";

function HomeBox() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllArticles()
      .then((data) => {
        setLoading(false);
        setArticles(data.splice(0, 8)); // Limit to 8 articles
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Boxie>
      <div className="image-container">
        {articles.map((article, index) => (
          <div key={index} className="item">
            <img src={article.article_img_url} alt={article.title} className="itemImage" />
            <p className="itemTitle" title={article.title}>{article.title}</p>
          </div>
        ))}
      </div>
    </Boxie>
  );
}

export default HomeBox;
