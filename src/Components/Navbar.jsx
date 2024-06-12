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
    <nav className='flex justify-between items-center w-full h-[72px] '>
       {/* logo section */}
        <div>
            <img className='w-[72px] h-[72px]' src={logo} alt="" />
        </div>
       {/* Menu bar section */}
        <div>
            <ul className='flex gap-x-6 uppercase font-semibold'>
                {menu.map((item)=>(
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar