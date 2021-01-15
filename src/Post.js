import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import "./Post.css";

function Post({profileSrc, image , Username , message , timestamp}) {
    return (
        <div className="post">
            <div className="post_top">
            <Avatar src={profileSrc} className="post_avatar"/>
                <div className="post_topinfo">
                    <h3>{Username}</h3>
                    <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt="post"/>
            </div>

            <div className="post_options">
                <div className="post_option">
                <ThumbUpIcon/>
                <p>Like</p>
                </div>
                <div className="post_option">
                <ChatBubbleOutlineOutlinedIcon/>
                <p>Comment</p>
                </div>
                <div className="post_option">
                <NearMeIcon/>
                <p>Share</p>
                </div>
                <div className="post_option">
                <AccountCircleIcon/>
                <ExpandMoreIcon/>
                
                </div>
            </div>
        </div>
    )
}

export default Post;
