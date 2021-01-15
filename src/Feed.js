import React, { useEffect, useState } from 'react';
import "./feed.css";
import Story from "./story";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {

    // fetch data code
    const [posts , setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc=>({id:doc.id , data:doc.data()})))
        });
    }, []);

    return (
        <div className="feed">
        <Story/>
        <MessageSender/>

        {/* hard code for fetch data from the db(table name = posts) */}

        {posts.map((post)=>(
        <Post
        key={post.id}
        Username = {post.data.Username}
        profileSrc={post.data.profileSrc}
        message={post.data.message}
        timestamp={post.data.timestamp}
        image={post.data.image}
        />
        ))}

        
        
    
            
        </div>
    )
}

export default Feed;
