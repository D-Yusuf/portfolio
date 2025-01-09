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
        <Link 
            href={href}
            target="_blank"
            style={{ backgroundColor: color, borderColor: color }} 
            className="p-2 text-center z-50 border-2 border-secondary group  rounded-md flex items-center gap-2  hover:opacity-90 transition-opacity"
        >
            <Icon className='size-8 group-hover:scale-110'/>
            {/* <Link href={href} target="_blank">{children}</Link> */}
        </Link>
    )
}
