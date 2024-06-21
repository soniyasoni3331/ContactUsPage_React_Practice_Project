import React from 'react'
import logo from '../assets/Logo.png'

const menu = [
    {
        id: 1,
        name: "Home",
    },
    {
        id: 2,
        name: "About",
    },
    {
        id: 3,
        name: "Contact",
    }
]

function Navbar() {
  return (
    <nav className='flex  items-center justify-between w-full h-[72px] font-font-family'>
       {/* logo section */}
        <div>
            <img className='w-[72px] h-[72px]' src={logo} alt="" />
        </div>
       {/* Menu bar section */}
        <div>
            <ul className='flex gap-x-6 uppercase font-semibold '>
                {menu.map((item)=>(
                    <li className='hover:scale-105 hover:text-gray-600' key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar