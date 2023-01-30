import {useState} from 'react'
import { PostList } from "./PostList/PostList"

const POSTS = [
    {id: 111, title: 'Oracle Certified Associate', author: 'O\'rielly'},
    {id: 112, title: 'Discrete Mathtematics', author: 'Saint Petersburg Press'},
    {id: 113, title: 'Introduction to frontend engineering', author: 'Uzbekistan Press'},
]

export const Dashboard = () => {

    const [title, setTitle] = useState("Dashboard");
    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    return (
        <div className="dashboard">
            <div className='dashboard-title'>
                <input 
                    value={title} 
                    name="title" 
                    onChange={handleTitleChange} 
                />
                <button type='button' >Edit title</button>
            </div>
            <PostList posts={POSTS} />
        </div>
    )
}