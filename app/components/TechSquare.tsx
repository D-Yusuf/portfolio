import React from 'react'
import Image from 'next/image'
type TechSquareProps = {
    image: string
    title: string
}

export default function TechSquare({image, title}: TechSquareProps) {
  return (
    <div className='flex flex-col gap-2 text-center'>
        <Image 
            width={125}
            height={125}
            src={image} alt={title}/>
        <p className='text-sm'>{title}</p>
    </div>
  )
}


