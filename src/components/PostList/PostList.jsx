import { usePost } from "../../store/PostContext"
import { Post } from "./components/Post"

export const PostList = ({posts}) => {
    const postId = usePost()
    
    const renderPosts = () => (
        posts?.length ? posts.map(post => (
            <Post key={post.id} post={post} />
        ))
        : 'There are no posts'
    )

    return (
        <>
            <h1 style={{textAlign: 'center', marginBottom: 50}}>Selected post ID: {postId}</h1>
            <div className="post-list">
                {renderPosts()}
            </div>
        </>
    )
}