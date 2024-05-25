import Modal from "./Modal";
import NewPost from "./NewPost"
import Post from "./Post"
import classes from './PostLists.module.css'
import { useState } from 'react';
const PostLists = ({isModalOpen, onCloseModal}) => {
    const [postBody, setPostBody] = useState('')
    const [postAuthor, setPostAuthor] = useState('')
    const [posts, setPosts] = useState([])
    const changeBodyHandler = (e) => {
        setPostBody(e.target.value)
    }
    const changeAuthorHandler = (e) => {
        setPostAuthor(e.target.value)
    }
    const submitPostHandler = (e) => {
        e.preventDefault()
        setPosts((prevPost) => [...prevPost, {title: postBody, author: postAuthor}])
    }

    return (
        <>
            {isModalOpen && <Modal>
                 <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} onCloseModal={onCloseModal} onPostSubmit={submitPostHandler} />
                </Modal>
            }
     
            <ul className={classes.posts}>
                {posts.length > 0 ? posts.map(post => <Post key={post.title} title={post.title} author={post.author}/>) : "Currently No Post Available"}
            </ul>
        </>

    )
}
export default PostLists