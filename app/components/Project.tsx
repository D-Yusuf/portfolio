'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

type ProjectProps = {
    title: string
    description: React.ReactNode
    coverImage: string | StaticImageData
    repoLink: string
    liveLink: string
    technologies: string[]
}

export default function Project({title, description, coverImage, repoLink, liveLink, technologies}: ProjectProps) {

  return (
    <div className="bg-primary flex flex-col max-w-sm group relative overflow-hidden rounded-xl transition-all duration-300 animate-slide-up">
      {/* Image Container */}
      <div className="relative w-full overflow-hidden h-[400px]">
        <Image
          src={coverImage}
          alt={title}
          className="transition-all duration-300 filter blur-sm opacity-100 group-hover:blur-none group-hover:opacity-100 mx-auto "
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
          fill
          style={{ objectFit: 'cover' }}
          {...(typeof coverImage !== 'string' ? { placeholder: 'blur' } : {})}
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
        <div className="mb-4">
          <div
            className="relative z-10 flex w-full min-w-0 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide gap-2 pointer-events-auto cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' as React.CSSProperties['touchAction'] }}
          >
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary select-none"
                style={{ userSelect: 'none' }}
              >
                {tech}
              </span>
            ))}
          </div>
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
