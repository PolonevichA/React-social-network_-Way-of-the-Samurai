import React from 'react';
import PostsList from './posts-list/Posts-list';

const AllPosts = () => {
    return(
        <section>
            <h2>Все сообщения</h2>
            <PostsList />
        </section>
    )
}

export default AllPosts;