import React from 'react'

const Video = ({ imgUrl }) => {
  return (
    <div className="flex w-full h-full bg-red-300 relative snap-start">
        <img src={imgUrl} className="w-full h-full" />
    </div>
  )
}

export default Video