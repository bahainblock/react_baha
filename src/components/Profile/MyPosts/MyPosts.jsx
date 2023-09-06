import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
   return <div className={s.content}>
      <div>
         My posts
         <div>
            New post
         </div>
         <div className={s.posts}>
            <Post message='How are you' likesCount='37' />
            <Post message='Hi brooo' likesCount='22' />
         </div>
      </div>
   </div>

}

export default MyPosts;