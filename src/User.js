import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./user.css";
import { Avatar, Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      }
    }));

function User({profileSrc, Username}) {
    const [{ user }, dispatch] = useStateValue();


    const classes = useStyles();

   

    const follow = ()=>{

    }
    const deleted = ()=>{

    }

    return (
        <div className="user">
            <div className="usertop">
            <Avatar src={user.photoURL} className={classes.large}/>
            <div className="userinfo">
                    <h4>{user.displayName}</h4>
            </div>
            </div>
            <Button type="submit" variant="contained" color="primary" onClick={follow}>follow</Button>
            <Button type="submit" variant="contained" color="primary" onClick={deleted}>Delete</Button>
        </div>
    )
}

export default User;
