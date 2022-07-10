import React from 'react'
import NavItem from './NavItem'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import tiktokLogo from '../assets/tiktok-logo.png';

const Nav = () => {
  return (
    <div className="flex justify-between items-center gap-4">
        <NavItem Icon={HomeIcon} title="Home" />
        <NavItem Icon={PeopleAltOutlinedIcon} title="Friends" />
        <img src={tiktokLogo} alt="Tik Tok Logo" className="w-10" />
        <NavItem Icon={ChatBubbleOutlineOutlinedIcon} title="Inbox" />
        <NavItem Icon={PermIdentityOutlinedIcon} title="Profile" />
    </div>
  )
}

export default Nav