import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

type SocialButtonProps = {
    children: React.ReactNode
    href: string
    icon: IconType
    color: string
}

export default function SocialButton({children, href, icon: Icon, color}: SocialButtonProps) {
    return (
        <button 
            style={{ backgroundColor: color, borderColor: color }} 
            className="p-2 text-center rounded-md flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
        >
            <Icon className='w-4 h-4'/>
            <Link href={href} target="_blank">{children}</Link>
        </button>
    )
}
