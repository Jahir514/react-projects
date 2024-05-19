import classes from './Post.module.css'
const Post = ({ title, author }) => {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{title}</p>
        </li>
    )
}
export default Post