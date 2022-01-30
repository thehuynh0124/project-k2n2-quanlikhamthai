import { createContext, useReducer } from "react"
import { postReducer } from "../reducers/postReducer"
import { apiUrl, POSTS_LOADED_FAIL, POSTS_LOADED_SUCCESS } from "./constants"
import axios from "axios"


export const PostContext = createContext()

const PostContextProvider = ({children}) =>{

    //state
    const[postState, dispatch] = useReducer(postReducer, {
        posts: [],
        postLoading: true
    })

    //get all post
    const getPosts = async() => {
        try {
            const response = await axios.get(`${apiUrl}/posts`)
            if(response.data.success)
            dispatch({type: POSTS_LOADED_SUCCESS, payload: response.data.posts})
        } catch (error) {
            dispatch({ type: POSTS_LOADED_FAIL })
        }
    }


    //post context data
    const PostContextData = {postState, getPosts}

    return (
        <PostContext.Provider value = {PostContextData}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider