import React from 'react'
import './Widget.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    
} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';
function Widgets() {



    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon 
                    className = "widgets__SearchIcon" 
                />
                <input placeholder = "Search Twitter" type = "text" />
            </div>
            <div className = "widgets__widgetContainer">
                <h2>
                    Whats'happening
                </h2>

                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "amerix"
                    options = {{ height: 400 }}
                />

                <TwitterShareButton 
                    url = {"https://twitter.com/amerix"}
                    options = { { text : "Subscribe " , via :  "Amerix" }}
               />
            </div>
        </div>
    )
}

export default Widgets