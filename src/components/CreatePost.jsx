import { useState } from "react"
import axios from 'axios'
import { API_BASE_URL } from "../constants"

export const CreatePost = () => {
    const [formData, setFormData] = useState({
        author: '',
        content: '',
        title: ''
    })

    const handleCreatePost = e => {
        e.preventDefault()
        axios.post(`${API_BASE_URL}/posts`, formData)
        window.location.reload()
    }

    const handlePostInputChange = e => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="create-post">
            <form onSubmit={handleCreatePost}>
                <div>
                    <input name="title" value={formData.title} onChange={handlePostInputChange} />
                </div>
                <div>
                    <input name="content" value={formData.content} onChange={handlePostInputChange} />
                </div>
                <div>
                    <input name="author" value={formData.author} onChange={handlePostInputChange} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}