import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {

    let posts= props.state.posts

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>

        </div>
    )


}

export default Profile;