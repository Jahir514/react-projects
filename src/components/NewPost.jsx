
import classes from './NewPost.module.css';

function NewPost({ onBodyChange, onAuthorChange, onCloseModal, onPostSubmit }) {


    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={onBodyChange} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={onAuthorChange} />
            </p>
            <div className={classes.actions}>
                <button type='button' onClick={onCloseModal}>Cancel</button>
                <button onClick={onPostSubmit}>Submit</button>
            </div>
            
        </form>
    );
}

export default NewPost;