import React from 'react'

function Header() {
  return (
    <div >
        {/* heading section */}
        <div className='w-[975px]'>
            <h1 className='text-6xl font-bold font-mono'>CONTACT US</h1>
            <p className='text-gray-500 text-sm font-semibold'>LET’S CONNECT: WE ARE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        </div>
        <div>
            {/*form section  */}
            <div>
                <form action="">
                    <div className='flex gap-x-8'>
                        <button className='w-[220px] h-[44px] bg-black text-white py-[10px] px-[18px] rounded-md font-semibold'>

                            VIA SUPPORT CHAT</button>
                        <button className='w-[220px] h-[44px] bg-black text-white py-[10px] px-[18px] rounded-md font-semibold'>

                        VIA CALL</button>
                    </div>
                    <div>
                    <button className='w-[472px] h-[44px] bg-transparent border border-black py-[10px] px-[18px] rounded-md font-semibold'>

                    VIA EMAIL FORM</button>
                        
                    </div>
                </form>
            </div>
            {/*image section  */}
            
        </div>
    </div>
  )
}

export default Header