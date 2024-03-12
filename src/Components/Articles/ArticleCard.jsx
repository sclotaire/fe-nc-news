import './ArticleList.css'
import { Link } from 'react-router-dom'

const ArticleCard = (props) => {
    const article = props.article

    return (
        <ul className="article-card">
            <Link to={`/articles/${article.article_id}`}>
            <p id='title' >{article.title}</p>
            </Link>
            <p>Written By {article.author}</p>
            <img id='article-img'src={article.article_img_url} />
            <p>Topic: {article.topic}</p>
            <p>Article ID: {article.article_id}</p>
            <p>Votes: {article.votes}</p>
            <p>Comment Count: {article.comment_count}</p>
            <p>Created at: {article.created_at}</p>
        </ul>
    )
    
}

export default ArticleCard