import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import avatar from '../images/avatar.png'
import './TweetBox.scss';

const TweetBox = () => {
    return (
        <div className="tweetBox">
        <form action="">
            <div className="tweetBox__input">
                <Avatar src={avatar}></Avatar>
                <input type="text" placeholder="What's on your mind?" />
                <input className="tweetBox__imageInput" type="text" placeholder="Enter image URL" />
            </div>
            <Button className="tweetBox__tweetBtn">Tweet</Button>
        </form>
    </div>
    );
};

export default TweetBox;