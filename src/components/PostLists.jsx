import Modal from "./Modal";
import NewPost from "./NewPost"
import Post from "./Post"
import classes from './PostLists.module.css'
import { useState } from 'react';
const PostLists = ({ isModalOpen, onCloseModal }) => {

    const [posts, setPosts] = useState([])

    const addPostHandler = (postData) => {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.parse(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setPosts((prevPost) => [postData, ...prevPost])
    }

    return (
        <>
            {isModalOpen && <Modal>
                <NewPost onCloseModal={onCloseModal} onAddPost={addPostHandler} />
            </Modal>
            }

            <ul className={classes.posts}>
                {posts.length > 0 ? posts.map(post => <Post key={post.title} title={post.title} author={post.author} />) : "Currently No Post Available"}
            </ul>
        </>

    )
}
export default PostLists