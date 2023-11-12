import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className='py-5'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='mt-5 text-base md:text-xl md:mt-20'>I started my coding journey in 2022. I started with Python as my first language and then shifted to Java. I have
            a firm grip on both of them. Along with that I am currently working and enhancing myself in the area of web
            development. I have worked with ReactJs and currently learning in-depth about MERN framework. I am also
            familiar with Data Structures and Algorithm and have solved 100+ questions on Leetcode.
            </p>

            <br/>
            <p className='text-base md:text-xl'>I have created some of the projects like Weather Application, Cloud Notebook to store user's notes, News application etc. I have created APIs on nodejs using MongoDb as database service. I have also worked on ExpressJs to make the backend services more efficient.</p>
        </div>
    </div>
  )
}

export default About
