import React from 'react'
import Project from '../components/Project'
import differenceImg from '../images/projectImages/difference.png'
import foodzImg from '../images/projectImages/foodz.png'
export default function Projects() {
  return (
    <section id='projects' className=" w-full flex flex-col gap-10">
            <h1 className='text-4xl font-extrabold'>Featured Projects</h1>
            <div className='flex flex-wrap justify-between gap-x-6 gap-y-10'>
                <Project title='Difference'
                 description='A platform that connects inventors with investors in a secure, transparent and easy way' 
                 coverImage={differenceImg} 
                 repoLink='https://github.com/D-Yusuf/difference-front' 
                 liveLink='https://github.com/yusufalnasiri/project1' 
                 technologies={['React Native', 'Express', 'MongoDB']} />

                <Project title='Foodiez'
                 description='A social platform for food lovers to find, share and save their favorite recipes' 
                 coverImage={foodzImg} 
                 repoLink='https://github.com/D-Yusuf/difference-front' 
                 liveLink='https://github.com/yusufalnasiri/project1' 
                 technologies={['React', 'Express', 'MongoDB', 'Tailwind CSS']} />

         

            </div>
    </section>
  )
}
