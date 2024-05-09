import {Card ,Button} from "react-bootstrap";
import '../resources/resourcesStyles/ArticleCard.css'
import { Link } from "react-router-dom";

function ArticleCard({article}){

    return(
        <Card className="articleCard" style={{}}>
             <Card.Img title="article image" src={article.article_img_url}></Card.Img>
            <Card.Body className="cardBody">
               <Link to={`/AllArticles/${article.article_id}`}> <Card.Title><h3>{article.title}</h3></Card.Title></Link>
                <Card.Text>Author: {article.author}</Card.Text>
                <Card.Text>Topic: {article.topic}</Card.Text>
                <Card.Text>Votes: {article.votes}</Card.Text>
                <Link to={`/AllArticles/${article.article_id}`}>  <Button variant="primary">Read full article</Button></Link>
            </Card.Body>
        </Card>


    )
}

export default ArticleCard