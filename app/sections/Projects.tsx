import React from 'react'
import Project from '../components/Project'

export default function Projects() {
  return (
    <section id='projects' className=" w-full h-screen">
        <div className='flex flex-col w-full gap-10 '>
            <h1 className='text-6xl font-bold'>Projects</h1>
            <div className='flex flex-col gap-10'>
                <Project title='Project 1' description='This is a project' coverImage='https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg' repoLink='https://github.com/D-Yusuf/difference-front' liveLink='https://github.com/yusufalnasiri/project1' technologies={['React', 'Next.js', 'Tailwind CSS']} />
            </div>
        </div>
    </section>
  )
}
