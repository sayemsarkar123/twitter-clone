import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons';
import React from 'react';
import avatar from '../../images/avatar.png'
import './Post.scss';

const Post = () => {

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                Programming Hero <span>
                                    <VerifiedUser className="post__badge" />
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>I challenge you to build a Twitter Clone</p>
                        </div>
                    </div>
                    <img src="https://media.giphy.com/media/xT5LMJmXRmrn3ft04w/giphy.gif" alt=""/>
                    <div className="post__footer">
                        <ChatBubbleOutline fontSize="small" />
                        <Repeat fontSize="small" />
                        <FavoriteBorder fontSize="small" />
                        <Publish fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;