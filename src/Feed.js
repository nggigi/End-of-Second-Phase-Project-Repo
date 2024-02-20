import React, { useEffect, useState } from 'react';
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import { getFirestore, collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // 
import FlipMove from 'react-flip-move';
function Feed() {

  const [posts, setPosts]=useState([])

  useEffect(() => {
    const db = getFirestore();
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
        setPosts(snapshot.docs.map(doc => doc.data()));
    });

    return () => unsubscribe();
}, []);

  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
            {/* Home */}
        </div>
        {/* Tweetbox */}
       <TweetBox/>

       {/* Post */}
       <Post/>
       <FlipMove>
                {posts.map(post => (
                <Post 
                key = {post.text}
                displayName = {post.displayName}
                username = {post.username}
                verified = {post.verified}
                text = {post.text}
                image = {post.image}
                avatar = {post.avatar}
            />
            ))}
            </FlipMove>   
      
    </div>
  )
}

export default Feed
