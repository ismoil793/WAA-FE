import {useState, useContext, createContext} from 'react'

// create a new context to store value
const PostContext = createContext()

// create a new context to update value
const PostContextUpdate = createContext()

// create a hook to access the value of context
// we will use this hook later in Dashboard.jsx
export const usePost = () => {
    return useContext(PostContext)
}

export const usePostUpdate = () => {
    return useContext(PostContextUpdate)
}

export const PostProvider = ({children}) => {
    const [globalPostID, setGlobalPostId] = useState('')

    const toggleGlobalPostId = (id) => {
        setGlobalPostId(id)
    }

    return (
        <PostContext.Provider value={globalPostID}>
            <PostContextUpdate.Provider value={toggleGlobalPostId}>
                {children}
            </PostContextUpdate.Provider>
        </PostContext.Provider>
    )
}

