import { useEffect, useState } from "react"
import { postComment } from "../../App"
import { Link } from "react-router-dom"
// import Loading from "../IsLoading/IsLoading"
import './AddComments.css'
import Login from "../Login/Login"

const AddComment = ({ article_id, comments, isLoading, setIsLoading }) => {
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [bodyError, setBodyError] = useState('')
    const [authorError, setAuthorError] = useState('')
    const [newComment, setNewComment] = useState('')

    
    const handleClick = (event) => {
        
        setIsLoading(true)
        event.preventDefault()



        if ('' === body) {
            setBodyError('Please enter a comment')
        }

        if ('' === author) {
            setAuthorError('Please enter a username')
        }


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
        setIsLoading('false')
    }


    return (
        <main>
            <h2>Leave a comment here: </h2>
            <div className="inputContainer">
                <input
                    type="text"
                    placeholder="Your username"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                    className="inputBox"
                />
                <label className="errorLabel">{authorError}</label>
            </div>

            <br />

            <div className="inputContainer">
                <input
                    type="text"
                    placeholder="Enter your comment here"
                    value={body}
                    className="inputBox"
                    onChange={(event) => setBody(event.target.value)} />
                <label className="errorLabel">{bodyError}</label>
            </div>
            {isLoading ? <p>is Loading...</p> : null}
            <br />
            <Link to={`/articles/${article_id}/comments`}>
                <button
                    className="inputButton"
                    type="button"
                    onClick={handleClick}
                    value='Add comment'
                >Add comment</button>

            </Link>

        </main>




    )
}

// <Link to={`/articles/${article_id}/comments`}>
// </Link>


//  <form onSubmit={handleSubmit}>
//       <div>
//              <input
//              type="text"
//              placeholder="Enter your comment here"
//              value={newComment}
//              onChange={(event) => setBody(event.target.value)}/>

//       </div>

//         <Link to={`/articles/${article_id}/comments`}>
//         <button onClick={handleSubmit}>Add comment</button>
//         </Link>
//     </form>

export default AddComment