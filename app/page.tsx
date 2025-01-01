import Image from "next/image";
import Introduction from "./sections/Introduction";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className=" text-secondary max-w-7xl mx-auto flex flex-col items-center justify-items-center min-h-screen p-8 pb-20  sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Introduction />
      <hr className="my-10 border-secondary h-px bg-secondary w-2/3" />
      <Projects />
      <hr className="my-10 border-secondary h-px bg-secondary w-2/3" />
      <Contact />
    </div>
  );
}
