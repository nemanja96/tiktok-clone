import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Video from './Video.js';
import video from '../assets/video.jpg';
import video2 from '../assets/video2.webp';
import video3 from '../assets/video3.webp';
import video4 from '../assets/video4.webp';

const Nav = () => {
  return (
    <div className="h-screen grid place-items-center relative">
        <div className="absolute top-6 right-6 flex gap-10 items-center z-50">
            <div className="flex gap-4 items-center">
                <h4 className="text-gray-500 text-md font-normal">Following</h4>
                <h5 className="text-white font-bold text-lg">For You</h5>                
            </div>
            <SearchOutlinedIcon sx={{ width: 28, height: 28 }} className="text-white" />
        </div>
        <div className="w-full h-full relative overflow-scroll snap-mandatory snap-y z-10">
            <Video imgUrl={video} />
            <Video imgUrl={video2} />
            <Video imgUrl={video3} />
            <Video imgUrl={video4} />
        </div>
    </div>
  )
}

export default Nav