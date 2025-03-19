import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 drop-shadow-md bg-white'>
        <div className="container mx-auto py-5 px-20 flex items-center justify-between">
            <div className="">
                <Image src="/images/Logo.svg" alt='Logo' width={180} height={32} className='w-[180px] h-[32px]'/>
            </div>
            <div className="flex items-center gap-x-10">
                <p>Menu</p>
                <p>Menu</p>
                <p>Menu</p>
                <p>Menu</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar