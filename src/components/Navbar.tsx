import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="text-white body-font bg-[#0f0175f3]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href=" " className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <h1 className="ml-3 text-xl text-white  hover:text-indigo-500">SW Arain</h1>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-indigo-400">Home</Link>
      <Link href="/about" className="mr-5 hover:text-indigo-400">About</Link>
      <Link href="/projects" className="mr-5 hover:text-indigo-400">Projects</Link>
      <Link href="/contact" className="mr-5 hover:text-indigo-400">Contact</Link>
    </nav>
    <button className="inline-flex items-center text-[#0f0175f3] bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500
     rounded text-base mt-4 md:mt-0">
      Hire Me
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

    </div>
  )
}

export default Navbar

