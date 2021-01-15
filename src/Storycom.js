import {Avatar} from '@material-ui/core';
import React from 'react';
import { useStateValue } from './StateProvider';
import "./Story_Com.css";

function Storycom({image, profileSrc,title}) {

    const [{ user }, dispatch] = useStateValue();
    
    return (
        <div style={{ backgroundImage: `url(${image})`}} className="story_com">
            <Avatar className="story_com_avatar" src={user.photoURL} />
            <h4>{title}</h4>
        </div>
    )
}

export default Storycom;

