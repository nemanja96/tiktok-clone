import React from 'react'

const SidebarNavItem = ({ Icon, title, smallText }) => {
  return (
    <div className="flex flex-col items-center">
        <Icon className="text-white" sx={{ width: 30, height: 30 }} />
        <h3 className={`text-white ${smallText ? `text-[10px]` : `text-xs`}`}>{title}</h3>
    </div>
  )
}

export default SidebarNavItem