import React from 'react';
import './Widgets.scss';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className='widgets__input'>
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1333139238011822080"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Mohamma52324377
"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://twitter.com/"}
                    option={{ text: "#reactjs is awesome", via: 'ProgrammingHero' }} />
            </div>

        </div>
    );
};

export default Widgets;