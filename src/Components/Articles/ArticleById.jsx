import { useEffect, useState} from "react";
import { getArticleById } from "../../App";
import { useParams } from 'react-router-dom'
import Comments from "../Comments/Comments";
import AddComment from "../Comments/AddComment";

const ArticleById = ({isLoading, setIsLoading}) => {

    const [comments, setComments] = useState([])
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [showingComments, setShowingComments] = useState(false)
    const [votes, setVotes] = useState(0)


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
            <p>Votes: {votes}</p>
            <button onClick={()=>setVotes(votes+1)}>+</button>
            <button onClick={() => setVotes(votes-1)}>-</button>

            <p>Comment Count: {article.comment_count}</p>
            <p>Created at: {article.created_at}</p>
            <AddComment comments={comments} article_id={article_id} isLoading={isLoading} setIsLoading={setIsLoading}/>

            {article.comment_count ?  <button onClick={()=>setShowingComments(!showingComments)}>Read comments</button> : <p>There are no comments for this article. Why not leave one?</p>}
            {showingComments ?<Comments comments={comments} setComments={setComments} article_id={article_id}/> : null}
            
        </main>
    )
}

export default ArticleById