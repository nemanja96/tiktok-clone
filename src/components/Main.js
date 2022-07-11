import React, { useState, useEffect } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Video from './Video.js';
import axios from 'axios';

const Nav = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:8001/tiktok/videos');
        const videos = response.data;
        setVideos(videos);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [])

  console.log(videos);

  return (
    <div className="h-screen grid place-items-center relative">
        <div className="absolute top-6 right-6 flex gap-10 items-center z-50">
            <div className="flex gap-4 items-center">
                <h4 className="text-gray-500 text-md font-normal">Following</h4>
                <h5 className="text-white font-bold text-lg">For You</h5>                
            </div>
            <SearchOutlinedIcon sx={{ width: 28, height: 28 }} className="text-white" />
        </div>
        <div className="w-full h-screen relative overflow-scroll snap-mandatory snap-y z-10">
          {
            videos.map(({ videoUrl, avatarUrl, likesNumber, commentsNumber, bookmarksNumber }) => (
              <Video imgUrl={videoUrl} avatarUrl={avatarUrl} likes={likesNumber} comments={commentsNumber} bookmarks={bookmarksNumber} />
            ))
          }
        </div>
    </div>
  )
}

export default Nav