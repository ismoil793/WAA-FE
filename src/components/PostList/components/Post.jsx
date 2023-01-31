import axios from 'axios'
import { API_BASE_URL } from '../../../constants';

export const Post = ({post}) => {
    const {id, title, author, content} = post;

    const handleDeletePost = () => {
        axios.delete(`${API_BASE_URL}/posts/${id}`)
        window.location.reload()
    }

    const handlePostDetailsClick = () => {
        alert(JSON.stringify(post))
    }

    return (
        <div className="post-item" key={id}>
            <div>ID: {id}</div>
            <div>Author: {author}</div>
            <div>Title: "{title}"</div>
            <div>Content: {content}</div>
            <div><button onClick={handleDeletePost}>Delete</button></div>
            <div>
                <button onClick={handlePostDetailsClick}>
                    View Details
                </button>
            </div>
        </div>
    )
}