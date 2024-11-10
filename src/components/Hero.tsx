import React from 'react'
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="grid md:grid-cols-1">
      <div className="bg-black h-[500px] flex items-center justify-center space-x-10 p-8">
        {/* Image */}
        <Image
          src="/images/port-image.jpg"
          alt="person"
          width={180}
          height={180}
          className="rounded-b-full rounded-t-full mr-44"
        />

        <div>
          {/* Heading */}
          <h2 className="text-6xl text-indigo-500 font-bold text-left  mt-5 hover:text-yellow-800">
            Hello <br /> I am <br /> Shabnam Wahid
          </h2>
             <h3 className="text-indigo-800 border-spacing-2  font-bold text-3xl hover:text-white">Front-end Developer</h3>
          <div className="text-white flex gap-4 mt-4 ">

    <button className="text-6 p-2 border-2 border-indigo-500 rounded-sm hover:text-indigo-800 text-bold hover:bg-white">About Me</button>
  
  <button className="text-6 p-2 border-2 border-indigo-500 rounded-sm hover:text-indigo-800 text-bold hover:bg-white">Contact Me</button>
</div>
        </div>
      </div>
    </div>
  );
};


export default Hero
