import axios from 'axios'
import { API_BASE_URL } from '../../../constants';
import { usePostUpdate } from '../../../store/PostContext';

export const Post = ({post}) => {
    const {id, title, author, content} = post;
    const updateGlobalPostId = usePostUpdate();

    const handleDeletePost = () => {
        axios.delete(`${API_BASE_URL}/posts/${id}`)
        window.location.reload()
    }

    const handlePostDetailsClick = () => {
        updateGlobalPostId(id)
        alert(JSON.stringify(post))
    }

    return (
        <div className="post-item">
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