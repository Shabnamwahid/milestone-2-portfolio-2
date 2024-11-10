"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-black">
      <section className="text-indigo-600 body-font relative pt-4 hover:text-white">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-4xl title-font mb-3 text-indigo-600 font-bold
             hover:text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-4">
              Have a question or need assistance? Feel free to contact us, and
              our team will provide the support you need.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-indigo-600 hover:text-white "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white bg-opacity-50 rounded border border-indigo-300
                     focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200
                      text-base outline-none text-white py-1 px-3 leading-8 transition-colors
                       duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-indigo-600 hover:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white bg-opacity-50 rounded border hover:text-white 
                     border-indigo-300 focus:border-indigo-500 focus:bg-white focus:ring-2
                      focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 
                      transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-indigo-600 hover:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white bg-opacity-50 rounded border border-indigo-300
                     focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32
                      text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors
                       duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-600 border-0 py-2 px-8
                hover:text-white 
                focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send Message
                </button>
              </div>
              <div className="p-2 w-full pt-6 mt-6 border-t border-gray-200 text-center">
                <a href="mailto:shabnam@email.com" className="text-indigo-600 hover:text-white">
                  shabnam@email.com
                </a>
                <p className="leading-normal my-5">
                  Gulshan-e-Iqbal
                  <br />
                  Uiverstiy Road Nipa Square, Karachi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
