import React from 'react';
import classes from './New-post.module.css';

const NewPost = () => {
    return (
        <section>
            <form className={classes.form}>
                <span className ={classes.title}>Написать сообщение</span>
                <input type="text"  className={classes.text}/>
                <button>Отправить</button>
            </form>
        </section>
    )
}

export default NewPost;