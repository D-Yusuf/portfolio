import React from 'react'
import Image from 'next/image'
import meImage from '../images/me-nature.jpg'
import SocialButton from '../components/SocialButton'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiReaddotcv } from "react-icons/si";
import TechSquare from '../components/TechSquare'

export default function Introduction() {
  return (
    <section id='introduction' className=" w-full flex max-h-screen">
        <div className='flex flex-col w-full gap-10 '>
            <h1 className='text-6xl font-bold'>Hello, I'm Yusuf Alnasiri 👋</h1>
            <h2 className='text-4xl font-bold '>A Full-Stack Developer 📱/💻</h2>

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


            
            <div className='flex  gap-2 mt-auto'>
                <SocialButton icon={FaGithub} href='https://github.com/D-Yusuf' color='#333'>Github</SocialButton>
                <SocialButton icon={FaLinkedin} href='https://linkedin.com/in/yusufalnasiri' color='#0077b5'>Linkedin</SocialButton>
                {/* <SocialButton icon={SiReaddotcv} href='https://linkedin.com/in/yusufalnasiri'>CV</SocialButton> */}
            </div>
        </div>
        <Image src={meImage} alt='me' className='h-1/2 w-1/3 rounded-b-full rounded-e-full mt-auto'/>
    </section>
  )
}
