import React from 'react';

const Friend = (props) => {
    const {name,phone, website, address} = props.friend;
    const friendStyle ={ 
      border: '3px solid goldenrod',
      padding: '10px',
      borderRadius: '8px',
      margin: '5px'
    }
    return (
        <div style={friendStyle}>
          <h2>I am {name}</h2>
          <h5>Call me: {phone}</h5>
          <p>Visit: {website}</p>
          <p><small>Address: {address.city}</small></p>
        </div>
    );
};

export default Friend;