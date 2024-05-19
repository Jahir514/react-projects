import NewPost from "./NewPost"
import Post from "./Post"
import classes from './PostLists.module.css'
import { useState } from 'react';
const PostLists = () => {
    const [postBody, setPostBody] = useState('')
    const [postAuthor, setPostAuthor] = useState('')
    const changeBodyHandler = (e) => {
        setPostBody(e.target.value)
    }
    const changeAuthorHandler = (e) => {
        setPostAuthor(e.target.value)
    }
    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
            <ul className={classes.posts}>
                <Post title={postBody} author={postAuthor} />
                <Post title="Post 2" author="Jack" />
            </ul>
        </>

    )
}
export default PostLists