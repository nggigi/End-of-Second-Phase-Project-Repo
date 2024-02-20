import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import MessageIcon from '@mui/icons-material/Message';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Person4Icon from '@mui/icons-material/Person4';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';


import './Sidebar.css'
function Sidebar() {

  function handleClick(){
    console.log("i was clicked ")
  }
  return (
    <div className='sidebar'>

            <TwitterIcon
            className='sidebar__twitterIcon'
            />
            <SidebarOptions 
            active
            Icon={HomeIcon}
            text="Home"
            onClick={handleClick}
            />
            <SidebarOptions 
            Icon={SearchIcon}
            text="Explore"
            />
            <SidebarOptions 
            Icon={NotificationsIcon}
            text="Notification"
            />
            <SidebarOptions 
            Icon={MessageIcon}
            text="Messages"
            />
            <SidebarOptions 
            Icon={BookmarksIcon}
            text="BookMarks"
            />
            <SidebarOptions 
            Icon={FormatListBulletedIcon}
            text="Lists"
            />
            <SidebarOptions 
            Icon={Person4Icon}
            text="Profile"
            />
            <SidebarOptions 
            Icon={MoreHorizIcon}
            text="More"
            />
            <Button className = "sidebar__tweet">Tweet</Button>
    </div>
  )
}

export default Sidebar
