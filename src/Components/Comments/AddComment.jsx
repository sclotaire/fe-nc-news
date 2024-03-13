import { useState } from "react"
import { postComment } from "../../App"
import { Link } from "react-router-dom"

const AddComment = ({article_id, comments, comment_count}) => {
    
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [newComment, setNewComment] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        const commentData = {
            author: author,
            body: body,
        }
        
        postComment(article_id, commentData).then((commentFromApi) => {
            setNewComment(commentFromApi)
            return [...comments, newComment]

        })

        setAuthor('')
        setBody('')
        setNewComment('')
    }

    return (
         <form onSubmit={handleSubmit}>
                <label>
                    Enter comment: 
                     <input
                     type="text"
                     value={newComment}
                     onChange={(event) => console.log(event)}/>
                </label>
                <Link to={`/articles/${article_id}/comments`}>
                <button onClick={handleSubmit}>Add comment</button>
                </Link>
            </form>

    )
}


export default AddComment