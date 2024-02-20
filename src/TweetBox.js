import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import React, {useState} from 'react';
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'; 

import './TweetBox.css';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        id: uuidv4(), 
        displayName: "Francis Ngigi",
        username: "Francis Ngigi",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "https://media.licdn.com/dms/image/D4D16AQEdZnld671wZA/profile-displaybackgroundimage-shrink_350_1400/0/1695057597579?e=2147483647&v=beta&t=PIseBcGPaIybaCDOShUkvyttr-om9TVsuYKdYcuqoBw"
      });
      console.log("Document written with ID: ", docRef.id);
      setTweetMessage("");
      setTweetImage("");
    } catch (error) {
      console.error("Error adding tweet: ", error);
    }
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src="https://media.licdn.com/dms/image/D4D03AQE7Uh7hdpfapA/profile-displayphoto-shrink_200_200/0/1695056790830?e=2147483647&v=beta&t=5TZ1AE8DN9D75md2US_0-dkveBzEcDZc11VJvC0JDLw"/>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder='Tweet'
            className='tweetBox__imageInput'
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          type='text'
          className='tweetBox__imageInput'
          placeholder='Optional: Enter Image URL'
        />
      </form>
      <Button
        onClick={sendTweet}
        className='tweetBox__tweetButton'
      >
        Tweet
      </Button>
    </div>
  );
}

export default TweetBox;









// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import React, {useState} from 'react'
// import db from './firebase'
// import { collection, addDoc } from 'firebase/firestore';

// import './TweetBox.css'


// function TweetBox() {

//   const[tweetMessage, setTweetMessage]= useState("");
//   const [tweetImage, SetTweetImage]= useState("");

//   const sendTweet=(e)=>{
//       e.preventDefault();
//       try{
      
//         const docRef = addDoc(collection(db, 'posts'), {
//           displayName: "Francis Ngigi",
//           username: "Francis Ngigi",
//           verified: true,
//           text: tweetMessage,
//           image: tweetImage,
//           avatar: "https://media.licdn.com/dms/image/D4D16AQEdZnld671wZA/profile-displaybackgroundimage-shrink_350_1400/0/1695057597579?e=2147483647&v=beta&t=PIseBcGPaIybaCDOShUkvyttr-om9TVsuYKdYcuqoBw",
          
//         });
    
        
//       setTweetMessage("")
//       SetTweetImage("")
//   }
//  catch (error) {
//   console.error("Error adding tweet: ", error);
// }
// };

//   return (
//     <div className='tweetBox'>
//       <form>
//         <div className='tweetBox__input'>
//     <Avatar src="https://media.licdn.com/dms/image/D4D03AQE7Uh7hdpfapA/profile-displayphoto-shrink_200_200/0/1695056790830?e=2147483647&v=beta&t=5TZ1AE8DN9D75md2US_0-dkveBzEcDZc11VJvC0JDLw"/>
//     <input 
//     onChange={(e)=>setTweetMessage(e.target.value)}
//     value={tweetMessage}
//     type="text" 
//     placeholder='What is happening'/>
//         </div>
//         <input 
//         onChange={(e)=>SetTweetImage(e.target.value)}
//         value={tweetImage}
//         type='text' 
//         className='tweetBox__imageInput'
//          placeholder='Optiona:Enter Image url' />
//       </form>
//       <Button 
//       onClick={sendTweet}
//       className='tweetBox__tweetButton'>Tweet</Button>


      

//     </div>
//   )
// }

// export default TweetBox
