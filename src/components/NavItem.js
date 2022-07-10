import React from 'react'

const NavItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center">
        <Icon sx={{ width: 24, height: 24 }} className="text-white" />
        <h3 className="text-white text-[10px] font-semibold">{title}</h3>
    </div>
  )
}

export default NavItem