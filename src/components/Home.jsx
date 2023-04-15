import React from 'react'
import { TbCloudDownload } from 'react-icons/tb'

import HeroImage from "../assets/heroImage.jpg"

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full items-center sm:items-start">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Full Stack Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          Currently I am learning web development using MERN technology. I am also familiar with data structures and algorithms. I am trying to make a firm grip in backend as well as frontend specially in Tailwind CSS.
        </p>

          <div>
            <button className="group flex text-white w-fit px-6 py-3 my-2 items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded-md">
              <a href="/Resume-Tejas-Patel.pdf" download={true} className='flex'>Resume
              <span className="group-hover:scale-125 ml-3 duration-300">
                <TbCloudDownload size={22}/>
              </span>
              </a>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3" />
        </div>
      </div>
    </div>
  )
}

export default Home