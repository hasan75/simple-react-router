import React from 'react';
import './post.css'
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title, id} = props.post;
    return (
        <div className="post">
            <h1>{title}</h1>
            <Link className="link" to={`/post/${id}`}> Post Details</Link>
        </div>
    );
};

export default Post;