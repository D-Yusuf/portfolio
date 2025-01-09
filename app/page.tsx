import Image from "next/image";
import Introduction from "./sections/Introduction";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import  SocialButton from "./components/SocialButton";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { PiInstagramLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <div className=" text-secondary max-w-7xl mx-auto flex flex-col items-center justify-items-center min-h-screen p-8 pb-20  sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Introduction />
      <hr className="my-24 border-secondary h-px bg-secondary w-2/3" />
      <Projects />
      <hr className="my-24 border-secondary h-px bg-secondary w-2/3" />
      <Contact />

      <hr className="block md:hidden my-24 border-secondary h-px bg-secondary w-2/3" />
      <div className=' flex md:flex-col md:fixed bottom-5 right-5 text-center items-center  gap-2'>
            <SocialButton icon={TbBrandGithub} href='https://github.com/D-Yusuf'/>
            <SocialButton icon={FiLinkedin} href='https://linkedin.com/in/yusufalnasiri'/>
            <SocialButton icon={PiInstagramLogoBold} href='https://instagram.com/yalnasiri'/>
            <SocialButton icon={BsTwitterX} href='https://instagram.com/yalnasiri'/>
          </div>
    </div>
  );
}
