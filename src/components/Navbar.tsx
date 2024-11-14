import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="text-white body-font bg-[#0f0175f3]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href=" " className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <h1 className="ml-3 text-xl text-white  hover:text-indigo-500">SW Arain</h1>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-indigo-400">Home</Link>
      <Link href="/about" className="mr-5 hover:text-indigo-400">About</Link>
      <Link href="/projects" className="mr-5 hover:text-indigo-400">Projects</Link>
      <Link href="/contact" className="mr-5 hover:text-indigo-400">Contact</Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar

