import { Avatar, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import avatar from '../images/avatar.png'
import './TweetBox.scss';
import { useForm } from "react-hook-form";
import { LoginContext } from '../App';

type Inputs = {
  desc: string,
  photoURL: string,
};

const TweetBox = () => {
    const [user, setUser] = useContext(LoginContext);
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const onSubmit = (data: Inputs): void => {
        const tweets = user.tweets || [];
        setUser({...user, tweets: [...tweets, data]})
    };
    return (
        <div className="tweetBox">
        <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
            <div className="tweetBox__input">
                <Avatar src={avatar}></Avatar>
                <input name="desc" type="text" className={`${errors.desc ? 'is-invalid' : ''}`} placeholder="What's on your mind?" ref={register({required: true})}/>
                <input name="photoURL" className={`tweetBox__imageInput ${errors.photoURL ? 'is-invalid' : ''}`} type="text" placeholder="Enter image URL" ref={register({required: true})}/>
            </div>
            <input className="tweetBox__tweetBtn" type="submit" value="Tweet"/>
        </form>
    </div>
    );
};

export default TweetBox;