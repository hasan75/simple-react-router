import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {id, name,phone, website, address} = props.friend;
    const friendStyle ={ 
      border: '3px solid goldenrod',
      padding: '10px',
      borderRadius: '8px',
      margin: '5px'
    };
    const url = `/friend/${id}`
    return (
        <div style={friendStyle}>
          <h2>I am {name}</h2>
          <h3>ID: {id}</h3>
          <h5>Call me: {phone}</h5>
          <p>Visit: {website}</p>
          <p><small>Address: {address.city}</small></p>
          <Link to={url}>Visit Me</Link>
        </div>
    );
};

export default Friend;