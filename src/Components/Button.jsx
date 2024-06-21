import React from 'react'

function Button({
    text,
    icon,
    className,
    ...props
}) {
  return (
    
        <button className={`w-[220px] h-[44px] bg-black text-white py-[10px] px-[16px] rounded-md font-semibold flex items-center justify-center hover:bg-white hover:text-black border border-black ${className}`}{...props}>
           <span className="px-2">{icon}</span> 
            {text}
        </button>
  )
}

export default Button