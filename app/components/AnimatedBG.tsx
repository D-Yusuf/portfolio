"use client"

export default function AnimatedBG() {
    return (
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-[#FBFEF9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12262A]/5 via-transparent to-[#12262A]/5 animate-gradient" />
        <div className="absolute h-[500px] w-[500px] -left-40 -top-40 rounded-full bg-[#12262A]/5 blur-3xl animate-blob" />
        <div className="absolute h-[400px] w-[400px] right-0 top-1/2 rounded-full bg-[#12262A]/5 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute h-[600px] w-[600px] left-1/3 bottom-0 rounded-full bg-[#12262A]/5 blur-3xl animate-blob animation-delay-4000" />
      </div>
    )
  }