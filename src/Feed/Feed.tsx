import React, { useContext } from 'react';
import { LoginContext } from '../App';
import Post from '../Components/Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import './Feed.scss';

const Feed = () => {
    const [user, setUser] = useContext(LoginContext);
    return (
        <div className="feed">
        <div className="feed__header">
            <h1>Home</h1>
        </div>
        <TweetBox />
        {
            user.tweets.map((tweet: any, idx: any) => <Post key={idx} tweet={tweet} />)
        }
    </div>
    );
};

export default Feed;