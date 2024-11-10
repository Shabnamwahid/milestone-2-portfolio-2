import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div>
      <section className="bg-black body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap items-center">
          {/* Title and Description */}
          <div className="flex w-full mb-10 flex-wrap justify-center">
            <h1 className="font-bold sm:text-5xl text-3xl title-font text-indigo-600 lg:w-1/3 lg:mb-0 mb-4 text-center">
              &quot;Explore My Projects&quot;
            </h1>
            <p className="text-2xl font-bold lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-indigo-600 text-center">
              Simple and direct, emphasizing that this is a personal showcase. Friendly and inviting, encouraging viewers to dive in.
            </p>
          </div>

          {/* Image Row 1 - Top */}
          <div className="flex flex-wrap justify-between mb-6">
            <div className="p-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
              <Image
                width={300}
                height={200}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-transparent hover:border-indigo-500 hover:border-spacing-2 transition-all duration-300"
                src="/images/sc.jpg"
              />
            </div>
            <div className="p-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
              <Image
                width={300}
                height={200}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-transparent hover:border-indigo-500 hover:border-spacing-2 transition-all duration-300"
                src="/images/Sc-shot-6.jpg"
              />
            </div>
            <div className="p-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
              <Image
                width={300}
                height={200}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-transparent hover:border-indigo-500 hover:border-spacing-2 transition-all duration-300"
                src="/images/Sc-shot-5.jpg"
              />
            </div>
          </div>

          {/* Image Row 2 - Bottom */}
          <div className="flex flex-wrap justify-between mb-6">
            <div className="p-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
              <Image
                width={300}
                height={200}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-transparent hover:border-indigo-500 hover:border-spacing-2 transition-all duration-300"
                src="/images/Sc-shot-2.jpg"
              />
            </div>
            <div className="p-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
              <Image
                width={300}
                height={200}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-transparent hover:border-indigo-500 hover:border-spacing-2 transition-all duration-300"
                src="/images/Sc-shot-4.jpg"
              />
            </div>
            <div className="p-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
              <Image
                width={300}
                height={200}
                alt="gallery"
                className="w-full h-full object-cover object-center block border-2 border-transparent hover:border-indigo-500 hover:border-spacing-2 transition-all duration-300"
                src="/images/Sc-shot-3.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
