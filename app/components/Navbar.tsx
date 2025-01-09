import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center relative w-full p-12 mb-16">
        <div className="text-xl font-bold hidden md:block md:absolute  left-10">@yalnasiri</div>
        <div className="flex font-bold justify-center items-center gap-x-10">

          <Link href="/">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
  )
}
