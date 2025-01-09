'use client'
import React from 'react'
import Image from 'next/image'
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

type ProjectProps = {
    title: string
    description: string
    coverImage: string
    repoLink: string
    liveLink: string
    technologies: string[]
}

export default function Project({title, description, coverImage, repoLink, liveLink, technologies}: ProjectProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-primary flex flex-col max-w-sm group relative overflow-hidden rounded-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full overflow-hidden h-[400px]">
        <Image
          src={coverImage}
          alt={title}
          className="transition-all duration-300 filter blur-sm opacity-100 group-hover:blur-none group-hover:opacity-100 mx-auto h-full "
        />
        <div className="absolute inset-0 bg-secondary/10 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-secondary">{title}</h3>
        <div className="mb-4 text-secondary/80 h-20 overflow-y-auto scrollbar-hide">
          <p>{description}</p>
        </div>

        {/* Technologies */}
        <div className="mb-4 relative flex items-center">
          <button onClick={scrollLeft} className="absolute left-0 z-10 p-1 bg-white rounded-full shadow-md">
            <FaArrowLeft />
          </button>
          <div ref={scrollRef} className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide mx-8">
            <div className="flex">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary mr-2 select-none"
                  style={{ userSelect: 'none' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button onClick={scrollRight} className="absolute right-0 z-10 p-1 bg-white rounded-full shadow-md">
            <FaArrowRight />
          </button>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary/80 transition-colors hover:text-secondary"
          >
            <FaGithub className="h-5 w-5" />
            <span>Repository</span>
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary/80 transition-colors hover:text-secondary"
          >
            <BiLinkExternal className="h-5 w-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  )
}
