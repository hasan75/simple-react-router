import React from 'react';
import Posts from '../Posts/Posts';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <div>
                <Posts></Posts>
            </div>
        </div>
    );
};

export default Home;