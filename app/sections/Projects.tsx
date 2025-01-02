import React from 'react'
import Project from '../components/Project'
import differenceImg from '../images/projectImages/difference.png'
export default function Projects() {
  return (
    <section id='projects' className=" w-full h-screen flex flex-col gap-10">
            <h1 className='text-4xl font-extrabold'>Featured Projects</h1>
            <div className='flex w-full gap-10'>
                <Project title='Difference'
                 description='A platform that connects inventors with investors in a secure, transparent and easy way' 
                 coverImage={differenceImg} 
                 repoLink='https://github.com/D-Yusuf/difference-front' 
                 liveLink='https://github.com/yusufalnasiri/project1' 
                 technologies={['React Native', 'Express', 'MongoDB']} />

                <Project title='Project 1' description='This is a project' coverImage='https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg' repoLink='https://github.com/D-Yusuf/difference-front' liveLink='https://github.com/yusufalnasiri/project1' technologies={['React', 'Next.js', 'Tailwind CSS']} />
                <Project title='Project 1' description='This is a project' coverImage='https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg' repoLink='https://github.com/D-Yusuf/difference-front' liveLink='https://github.com/yusufalnasiri/project1' technologies={['React', 'Next.js', 'Tailwind CSS']} />
            </div>
    </section>
  )
}
