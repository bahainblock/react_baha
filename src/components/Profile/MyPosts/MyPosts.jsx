import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.posts

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return <div className={s.content}>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>

}

export default MyPosts;