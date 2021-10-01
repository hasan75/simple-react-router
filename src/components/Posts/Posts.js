import React, { useEffect, useState } from 'react';
import './Posts.css'
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return (
        <div>
            <h3>Today's Posts are {posts.length}</h3>
            <div className="post-container">
                {
                posts.map(post => <Post
                key ={post.id}
                post={post}
                ></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;