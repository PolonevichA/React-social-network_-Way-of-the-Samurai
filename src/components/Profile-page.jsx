import React from 'react';

const ProfilePage = () => {
    return (
        <main className ="main-profile">
            <section className = "main-profile__descr">
                Photo and description
            </section>
            <section className = "main-profile__my-posts">
                My posts
            </section>
            <section className = "main-profile__all-posts">
                All posts
                <div>Post 1</div>
                <div>Pos 2</div>
            </section>
        </main>
    )
}

export default ProfilePage;