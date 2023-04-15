import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="bg-gradient-to-b from-gray-800 to-black p-4 text-white pt-40 md:pt-0">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/3cc2b153-522d-421f-9a6e-57d00790a02a" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className="p-2 bg-transparent border-2 border-gray-400 rounded-md text-white focus:outline-none "/>
                    <input type="email" name="email" placeholder='Enter your email' className="p-2 bg-transparent border-2 border-gray-400 rounded-md text-white focus:outline-none my-3"/>
                    <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md focus:outline-none border-gray-400 text-white' placeholder='Your message here...'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact