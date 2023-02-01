import {useEffect, useState} from 'react'
import axios from 'axios'
import { PostList } from "./PostList/PostList"
import { CreatePost } from './CreatePost'
import { API_BASE_URL } from '../constants'
import { PostProvider } from '../store/PostContext'

const POSTS = [
    {id: 111, title: 'Oracle Certified Associate', author: 'O\'rielly'},
    {id: 112, title: 'Discrete Mathtematics', author: 'Saint Petersburg Press'},
    {id: 113, title: 'Introduction to frontend engineering', author: 'Uzbekistan Press'},
]

export const Dashboard = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/posts`)
            setPosts(res.data)
        } catch(e) {
            console.log(`Failed to fetch posts! ${e}`)
            setPosts([])
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <PostProvider>
            <div className="dashboard">
                <PostList posts={posts} />
                <CreatePost />
            </div>
        </PostProvider>
    )
}