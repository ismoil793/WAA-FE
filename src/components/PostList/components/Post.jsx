export const Post = ({post}) => {
    const {id, title, author} = post;

    return (
        <div className="post-item" key={id}>
            <div>ID: {id}</div>
            <div>Title: "{title}"</div>
            <div>Author: {author}</div>
        </div>
    )
}