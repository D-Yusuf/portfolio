import React from 'react'
import Image from 'next/image'
import meImage from '../images/me-nature.jpg'
import SocialButton from '../components/SocialButton'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiReaddotcv } from "react-icons/si";
import TechSquare from '../components/TechSquare'

export default function Introduction() {
  return (
    <section id='introduction' className=" w-full flex max-h-screen  ">
        <div className='flex flex-col w-full md:gap-16 gap-8 lg:items-start items-center lg:text-left text-center'>
            <h1 className='md:text-6xl text-4xl font-bold'>Hello, I'm Yusuf Alnasiri 👋</h1>
            <Image 
          src={meImage} 
          alt='me' 

          className='lg:hidden  w-[250px] h-[300px] object-cover -z-10 rounded-md'
        />
            <h2 className='md:text-4xl text-2xl font-bold '>A Full-Stack Developer 📱/💻</h2>

            <div className='flex flex-col  gap-3'>
                <div className="flex gap-3">

                <TechSquare title="TypeScript" image="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg"/>
                <TechSquare title="JavaScript" image="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg"/>
                <TechSquare title="React Native" image="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg"/>
                <TechSquare title="Tailwind" image="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg"/>
                </div>
             
                <div className="flex gap-3">
                <TechSquare title="Node" image="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg"/>
                <TechSquare title="MongoDB" image="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MongoDB.svg"/>
               

                <TechSquare title="Express" image="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/ExpressJS-Dark.svg"/>
                <TechSquare title="NextJS" image="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NextJS-Dark.svg"/>
                </div>
                </div>


            
            
        </div>
        <Image 
          src={meImage} 
          alt='me' 

          className='hidden lg:w-[400px] lg:h-[600px]  lg:block rounded-b-full rounded-e-full mt-auto'
        />
        
    </section>
  )
}
