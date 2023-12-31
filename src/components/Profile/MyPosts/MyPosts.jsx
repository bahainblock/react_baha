import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.posts

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return <div className={s.content}>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>

}

export default MyPosts;