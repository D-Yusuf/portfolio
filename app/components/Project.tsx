import React from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
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
  return (
    <div className="bg-primary flex flex-col w-[49%] group relative overflow-hidden rounded-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          height={450}
          className="transition-all duration-300 filter blur-sm opacity-100 group-hover:blur-none group-hover:opacity-100 mx-auto"
        />
        <div className="absolute inset-0 bg-secondary/10 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-secondary">{title}</h3>
        <p className="mb-4 text-secondary/80 ">{description}</p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary"
            >
              {tech}
            </span>
          ))}
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
