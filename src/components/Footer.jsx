import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    < FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com',
        },
        {
            id: 2,
            child: (
                <>
                    < FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/techno-tez',
        },
        {
            id: 3,
            child: (
                <>
                    < HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:pateltejas.2005@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    < BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Resume-Tejas-Patel.pdf',
            download: true
        }]
    return (
        <div className="bg-black w-full h-60 sm:h-[60px]">
            <div className='flex flex-col justify-center items-center sm:flex-row text-white my-auto h-full gap-5 sm:gap-20'>
                {links.map(({ id, child, href, download }) => {
                    return <a id={id} target="_blank" rel="noreferrer" href={href} download={true} className="cursor-pointer hover:scale-110 duration-300 hover:shadow-sky-500 shadow-md rounded-lg">
                        {child}
                    </a>
                })}
            </div>
            <div className='bg-black text-white flex justify-center items-center h-20'>
                <p>Copyright &#169; 2023 Techno-Tez &#174;</p>
            </div>
        </div>
    )
}

export default Footer