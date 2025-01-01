import { getAllArticles } from "../api";
import { useState, useEffect } from "react";
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

        for (let i = data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [data[i], data[j]] = [data[j], data[i]];
        }

        setArticles(data.slice(0, 8));
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);


  return (
    <Boxie>
      <div className="latestNews">
        {loading ? (<><div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}><Loading /><p style={{zIndex:10000}}>Data being fetched from api...<br/>This might take a minute, thanks for your patience</p>
      
        </div></>) :
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
