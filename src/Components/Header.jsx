import React, {useState } from 'react'
import backgroundPattern from '../assets/background-pattern.png'
import woman from '../assets/womanImage.png'
import watch from '../assets/watch.png'
import bubble from '../assets/bubble.png'
import text from '../assets/text.png'
import { BsChatLeftText } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Button from './Button'



function Header() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    const onSubmitHandle = (e) =>{
        e.preventDefault();
       setName(e.target[0].value)
        setEmail(e.target[1].value)
        setMsg(e.target[2].value)
        makeAlert()
    }
    
    function makeAlert(){
        alert(`Welcome ${name}! Your email is "${email}" and Your msg is "${msg}"`);
    }

  return (
    <div className='mt-[72px] h-auto w-[1161px] flex flex-col justify-center items-start font-font-family m-auto'>
        {/* heading section */}
        <div className='w-[975px] h-auto text-left flex flex-col place-items-start'>
            <h1 className='text-6xl font-bold'>CONTACT US</h1>
            <p className='text-gray-600 text-sm font-semibold'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.  </p>
        </div>
        <div className='w-full h-[600px] flex justify-between items-center'>
         <div className='w-[472px] my-5 flex flex-col gap-y-[23px]'>
            <div className='flex flex-col gap-y-[17px]'>
                <div className='flex gap-x-8'>
                    <Button  
                    icon={<BsChatLeftText/>}
                    text="VIA SUPPORT CHAT">
                    </Button>
                    <Button  
                    icon={<FaPhoneAlt />}
                    text="VIA CALL">
                    </Button>
                </div>
                <div>
                    <div>
                    <Button style={{"backgroundColor": "white", "color":"black"}} className='hover:text-white hover:bg-black w-full' icon={<BsChatLeftText />}
                    text="VIA EMAIL FORM">
                    </Button>
                    </div>
                </div>
                </div>
                 {/*form section  */}
                <form onSubmit={onSubmitHandle} className=' flex flex-col gap-y-[23px]'>
                <div className='font-semibold'>
                      <div className='flex flex-col gap-y-5'>
                        <div className='border border-black relative rounded-md'>
                        <label htmlFor='name' className='absolute -top-3 left-2 px-4 bg-white'>Name</label>
                            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className='w-full py-2 px-4 rounded-md' />
                        </div>
                        <div className='border border-black relative rounded-md'>
                            <label htmlFor='eamil' className='absolute -top-3 left-2 px-4 bg-white'>E-Mail</label>
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='w-full py-2 px-4 rounded-md'/>
                        </div>
                        <div className='h-[142px] border border-black relative rounded-md'>
                        <label htmlFor='text' className='absolute -top-3 left-2 px-4 bg-white'>Text</label>
                            <textarea  type="text" value={msg} onChange={(e)=> setMsg(e.target.value)} className='h-[140px] w-full pt-2 px-4 rounded-md' />
                        </div>
                       <div className='flex justify-end'>
                       <Button className={'w-[220px] text-white '} text="SUBMIT">
                       </Button>
                       </div>
                    </div>    
                    </div>
                </form>
            </div>
            {/*image section  */}
            <div className='w-[608px] h-[615px] relative'>
                <img src={backgroundPattern} alt="" className='absolute top-[34.45px] right-[54.01px] z-0 w-[477.38px] h-[523.1px]' />
                <img src={woman} alt="" className='absolute top-[90.9px] left-[44.35px] z-10 w-[508.87px] h-[488.31px]' />
                <img src={watch} alt="" className='absolute left-[59.07px] top-[73.71px] w-[180.33px] h-[128.46px]' />
                <img src={text} alt="" className='absolute top-[207.61px] left-[42.28px] w-[211.64px] h-[125.28px]' />
                <img src={bubble} alt="" className='absolute top-[125.23px] left-[459.5px] w-[103.11px] h-[104.3px]' />
            </div>
        </div>
    </div>
  )
}

export default Header