import './ArticleList.css'

const ArticleCard = (props) => {
    const article = props.article
    return (
        <li className="article-card">
            <p id='title'>{article.title}</p>
            <p>Written By {article.author}</p>
            <img id='article-img'src={article.article_img_url} />
            <p>Topic: {article.topic}</p>
            <p>Article ID: {article.article_id}</p>
            <p>Votes: {article.votes}</p>
            <p>Comment Count: {article.comment_count}</p>
            <p>Created at: {article.created_at}</p>
        </li>
    )
}

export default ArticleCard