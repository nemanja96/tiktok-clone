import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReplyIcon from '@mui/icons-material/Reply';
import SidebarNavItem from './SidebarNavItem';
import Avatar from '@mui/material/Avatar';

const SidebarNav = ({ avatarUrl, likes, comments, bookmarks }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
        <SidebarNavItem Icon={FavoriteIcon} title={likes} />
        <SidebarNavItem Icon={MessageIcon} title={comments} />
        <SidebarNavItem Icon={BookmarkIcon} title={bookmarks} />
        <SidebarNavItem Icon={ReplyIcon} title="Share" smallText={true} />
        <Avatar src={avatarUrl} alt="Nemanja Radivojevic" sx={{ width: 40, height: 40 }} className="border-8 border-black border-solid mt-3" />
    </div>
  )
}

export default SidebarNav