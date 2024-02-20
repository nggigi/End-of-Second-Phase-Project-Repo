import Avatar from '@mui/material/Avatar';
import PublishIcon from '@mui/icons-material/Publish';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { forwardRef } from 'react';
import './Post.css';

const Post = forwardRef(
  ({ id, displayName, username, verified, text, image, avatar, onDelete }, ref) => {
    const handleDelete = () => {
      onDelete(id); // Call onDelete function with post ID
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}
                  @{username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            <DeleteIcon fontSize="small" onClick={handleDelete} />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;











// import Avatar from '@mui/material/Avatar';

// import PublishIcon from '@mui/icons-material/Publish';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
// import RepeatIcon from '@mui/icons-material/Repeat'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
// ;import React, {forwardRef} from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
// import './Post.css'

// const  Post =forwardRef(
//     ({
//         displayName,
//         username,
//         verified, 
//         text, 
//         image, 
//         avatar
        
// }, ref) => {

//     function handleDelete(){
//         console.log("deleted")
//     }
//     return (
//         <div className = "post" ref={ref}>
//             <div className = "post__avatar">
//                 <Avatar 
//                     src = {avatar}
//                 />
//             </div>
//             <div className = "post__body">
//                 <div className = "post__header">
//                     <div className = "post__headerText">
//                     <h3>
//                         {displayName}
//                             <span className = "post__headerSpecial">
//                                 {verified && <VerifiedUserIcon className = "post__badge" />}
//                                 @{username}
//                             </span>
//                     </h3>
//                     </div>
//                     <div className = "post__headerDescription">
//                         <p>{text}</p>
//                     </div>
//                 </div>
//                 <img 
//                     src = {image}
//                     alt = ""
//                 />
//                 <div className = "post__footer">
//                     <ChatBubbleOutlineIcon fontSize = "small" /> 
//                     <RepeatIcon fontSize = "small" />
//                     <FavoriteBorderIcon fontSize = "small" />
//                     <PublishIcon  fontSize = "small" /> 
//                     <DeleteIcon 
//                     onClick={handleDelete}
//                     fontSize = "small"/>
//                 </div>
//             </div>    
//         </div>
//     )
// })

// export default Post