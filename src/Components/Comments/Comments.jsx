import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments } from "../../App";

const Comments = () => {

    const {article_id} = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
        })
    }, [])

    return (
        <main>
            <ul>
                {comments.map((comment, index) => {
                    return <li key={index}>
                    <p>Posted by {comment.author}</p>
                    <p>Article ID: {comment.article_id}</p>
                    <p>{comment.body}</p>
                    <p>{comment.votes} Likes</p>
                    <p>Comment ID: {comment.comment_id}</p>
                    <p>Posted on: {comment.created_at}</p>
                    </li>
                })}
            </ul>
        </main>
    )
}

export default Comments