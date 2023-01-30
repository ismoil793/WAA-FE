import { Post } from "./components/Post"

export const PostList = ({posts}) => {
    
    const renderPosts = () => (
        posts?.length ? posts.map(post => (
            <Post post={post} />
        ))
        : 'There are no posts'
    )

    return (
        <div className="post-list">{renderPosts()}</div>
    )
}