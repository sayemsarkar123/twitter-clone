import React from 'react';
import Post from '../Components/Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import './Feed.scss';

const Feed = () => {
    return (
        <div className="feed">
        <div className="feed__header">
            <h1>Home</h1>
        </div>
        <TweetBox />
        <Post />
            <Post />
            <Post />
            <Post />
            <Post />
    </div>
    );
};

export default Feed;