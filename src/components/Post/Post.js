import React from 'react';
import './post.css'
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const {title, id} = props.post;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/post/${id}`)
    }
    return (
        <div className="post">
            <h1>{title}</h1>
            <Link className="link" to={`/post/${id}`}> Post Details</Link>

            <button onClick={handleClick}>Click to see Details</button>
        </div>
    );
};

export default Post;