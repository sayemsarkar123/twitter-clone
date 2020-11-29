import React from 'react';
import './Sidebar.scss';
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import SidebarOption from '../SidebarOptions/SidebarOption';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from '@material-ui/core';
// import SidebarOption from '../SidebarOptions/SidebarOption';

const Sidebar = () => {
    const sidebarData = [
        {
            id: 1,
            text: "Home",
            Icon: HomeIcon
        },
        {
            id: 2,
            text: "Explore",
            Icon: SearchIcon 
        },
        {
            id: 3,
            text: "Notifications",
            Icon: NotificationsNoneIcon 
        },
        {
            id:4,
            text: "Message",
            Icon: MailOutlineIcon 
        },
        {
            id: 5,
            text: "Bookmarks",
            Icon: BookmarkBorderIcon 
        },
        {
            id: 6,
            text: "Lists",
            Icon: ListAltIcon 
        },
        {
            id: 7,
            text: "Profile",
            Icon: PermIdentityIcon 
        },
        {
            id: 8,
            text: "More",
            Icon: MoreHorizIcon
        },
    ]
    return (
        <div className="sidebar">
         
            <TwitterIcon className="sidebar__twitterIcon" />
            {
                sidebarData.map(dt => <SidebarOption key={dt.id} data={dt} />)
            }
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    );
};

export default Sidebar;