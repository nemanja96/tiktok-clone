import React from 'react'
import Avatar from '@mui/material/Avatar';
// import avatarUrl from '../assets/avatar-url.png';
import SidebarNav from './SidebarNav';
import AddIcon from '@mui/icons-material/Add';

const Video = ({ imgUrl, avatarUrl, likes, comments, bookmarks }) => {
  return (
    <div className="flex w-full h-full max-h-[650px] bg-red-300 relative snap-start">
        <img src={imgUrl} className="w-full h-screen" />
        <div className="absolute right-3 bottom-20 w-[50px] h-[400px] z-40 flex flex-col justify-end items-center">
          <div className="mb-6 flex relative justify-center">
            <Avatar src={avatarUrl} alt="Nemanja Radivojevic" sx={{ width: 35, height: 35 }} className="border border-white border-solid" />
            <span className="absolute -bottom-1 w-3 h-3 bg-red-500 rounded-full flex justify-center items-center text-white">
              <AddIcon sx={{ width: 10, height: 10 }} />
            </span>
          </div>
          <SidebarNav avatarUrl={avatarUrl} likes={likes} comments={comments} bookmarks={bookmarks} />
        </div>
    </div>
  )
}

export default Video