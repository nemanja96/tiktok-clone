import React, { useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import SidebarNav from './SidebarNav';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Video = ({ imgUrl, avatarUrl, likes, comments, bookmarks, userName, description, hashtags }) => {
  
  const videoRef = useRef();
  const [showPlayButton, setShowPlayButton] = useState(true);

  const playVideo = () => {
    if(videoRef.current.paused) {
      videoRef.current.play();
      setShowPlayButton(false);
    } else {
      videoRef.current.pause();
      setShowPlayButton(true);
    }
  }

  return (
    <div className="flex w-full h-full max-h-[800px] relative snap-start">
      { showPlayButton && <PlayArrowIcon className="absolute top-0 left-0 right-0 bottom-0 m-auto z-50 text-white" sx={{ width: 50, height: 50 }} onClick={playVideo} /> }
        <div className="w-full h-full overflow-hidden">
          <video className="w-full h-full absolute top-0 bottom-0 bg-black overflow-hidden object-cover" ref={videoRef} onClick={playVideo} loop autoplay >
            <source src={require(`../assets/${userName}.mp4`)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute right-3 bottom-20 w-[50px] h-[400px] z-40 flex flex-col justify-end items-center">
          <div className="mb-6 flex relative justify-center">
            <Avatar src={avatarUrl} alt="Nemanja Radivojevic" sx={{ width: 50, height: 50 }} className="border border-white border-solid" />
            <span className="absolute -bottom-1 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center text-white">
              <AddIcon sx={{ width: 12, height: 12 }} />
            </span>
          </div>
          <SidebarNav avatarUrl={avatarUrl} likes={likes} comments={comments} bookmarks={bookmarks} />
        </div>
        <div className="absolute bottom-20 left-4">
          <h3 className="text-white text-sm font-semibold">@{userName}</h3>
          <p className="text-white text-sm mt-2 mb-1">{description}</p>
          <div className="w-9/12 flex flex-wrap gap-x-2">
            {
              hashtags.map(hashtag => (
                  <span key={hashtag} className="text-white text-sm font-semibold">#{hashtag}</span>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Video