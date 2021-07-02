import React from 'react';
import Post from './post/Post';

const PostsList = () => {
    return (
        <ul>
            <Post message ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quasi nihil. Perspiciatis minima sapiente a sed cum nam, minus, doloremque dignissimos soluta" like="3"/>
            <Post message ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quasi nihil. Perspiciatis minima sapiente a sed cum nam, minus, doloremque dignissimos soluta Vitae, quasi nihil. Perspiciatis minima sapiente a sed cum nam, minus, doloremque dignissimos soluta" like="17"/>
        </ul>
    )
}



export default PostsList;