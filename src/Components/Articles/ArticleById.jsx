import { useEffect, useState } from "react";
import { getArticleById } from "../../App";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import { getComments } from "../../App";

const ArticleById = () => {

    const { article_id } = useParams();
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticleById(article_id).then((articleFromApi) => {
            setArticle(articleFromApi)
        })
    }, [])


    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
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
            
            <button id='title' onClick={()=> {comments.map((comment, index) => {
                {console.log(comment);}
                <p>{comment.comment_id}</p>
            })}}>Read comments</button>
            
            <p>Comment Count: {article.comment_count}</p>
            <p>Created at: {article.created_at}</p>
        </main>
    )
}

export default ArticleById