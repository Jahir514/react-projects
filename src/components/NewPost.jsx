
import classes from './NewPost.module.css';
import { useState } from 'react';
function NewPost({ onCloseModal, onAddPost }) {
    const [postBody, setPostBody] = useState('')
    const [postAuthor, setPostAuthor] = useState('')
    const changeBodyHandler = (e) => {
        setPostBody(e.target.value)
    }
    const changeAuthorHandler = (e) => {
        setPostAuthor(e.target.value)
    }
    const postSubmitHandler = (e) => {
        e.preventDefault()
        const postData = {
            title: postBody,
            author: postAuthor
        }
        //add new post
        onAddPost(postData)
        //cancel form
        onCloseModal()
    }

    return (
        <form className={classes.form} onSubmit={postSubmitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={changeAuthorHandler} />
            </p>
            <div className={classes.actions}>
                <button type='button' onClick={onCloseModal}>Cancel</button>
                <button >Submit</button>
            </div>

        </form>
    );
}

export default NewPost;