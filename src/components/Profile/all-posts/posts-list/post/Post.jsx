import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className ={classes.post}>
            avatar
            <p>{props.message}</p>
            <div>
                <span>like</span>
                <span>Колличество лайков: {props.like}</span>
            </div>
            <button>remove</button>
        </div>
    )
}
export default Post;