import { useEffect, useState} from "react";
import { getArticleById } from "../../App";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import { getComments } from "../../App";

const ArticleById = () => {

    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [showingComments, setShowingComments] = useState(false)
    const [noComments, setNoComments] = useState(false)

    useEffect(() => {
        getArticleById(article_id).then((articleFromApi) => {
            setArticle(articleFromApi)
        })
    }, [])


   

    return (
        <main>
            <h1>{article.title}</h1>
            <p>Written By {article.author}</p>
            <p>Topic: {article.topic}</p>
            <img id='article-img' src={article.article_img_url} />
            <p>{article.body}</p>
            <p>Article ID: {article.article_id}</p>
            <p>Votes: {article.votes}</p>
            <p>Comment Count: {article.comment_count}</p>
            <p>Created at: {article.created_at}</p>
            {article.comment_count ?  <button onClick={()=>setShowingComments(!showingComments)}>Read comments</button> : <p>There are no comments for this article. Why not leave one?</p>}
            {showingComments ?<Comments article_id={article_id}/> : null}
            
        </main>
    )
}

export default ArticleById