import React from 'react'
import './SidebarOptions.css'
function SidebarOptions({active, text, Icon, link}) {
  return (
    <div className={`sidebarOptions ${active && 'sidebarOptions--active' }`}>
      <Icon/>
      <h2>{text}</h2>
      <h2>{link}</h2>
    </div>
  )
}

export default SidebarOptions
