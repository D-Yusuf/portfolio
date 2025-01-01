import React from 'react'
import Image from 'next/image'
import meImage from '../images/me-nature.jpg'
export default function Introduction() {
  return (
    <section id='introduction' className=" w-full flex max-h-screen">
        <div className='flex flex-col w-full gap-10 '>
            <p className='text-6xl font-bold'>Hello, I'm Yusuf Alnasiri 👋</p>
            <h1 className='text-4xl font-bold '>Full-Stack Developer</h1>
        </div>
        <Image src={meImage} alt='me' className='h-1/2 w-1/3 rounded-b-full rounded-e-full'/>
    </section>
  )
}
