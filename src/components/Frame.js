import React from 'react'
import Nav from './Nav'
import Main from './Main'

const Frame = () => {
  return (
    <div className="w-full h-screen max-w-sm max-h-[800px] overflow-hidden relative flex flex-col bg-gray-400 snap-mandatory">
        <Main />
        <Nav />
    </div>
  )
}

export default Frame