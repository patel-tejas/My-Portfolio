import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin < FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github < FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/techno-tez',
        },
        {
            id: 3,
            child: (
                <>
                    Mail < HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:pateltejas.2005@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume < BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Resume-Tejas-Patel.pdf',
            style: 'rounded-br-md',
            download: true
        }]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({id, child, href, style, download}) => {
                   return <li key={id} className={"flex items-center w-40 h-14 px-5 bg-gray-500 ml-[-90px] hover:ml-[-10px] hover:rounded-md duration-300 " + style}>
                        <a href={href} className="flex items-center w-full text-white justify-between" download={download} target="_blank" rel="noreferrer">
                            {child}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default SocialLinks