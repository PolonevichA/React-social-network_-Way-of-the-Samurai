import React from 'react';
import classes from './Profile.module.css';
import UserInfo from './user-info/User-info';
import AllPosts from './all-posts/All-posts';
import NewPost from './new-post/New-post';

const Profile = () =>{
    return (
        <main className ={classes.profile}>
            <UserInfo />
            <NewPost />
            <AllPosts />
        </main>
    )
}

export default Profile;