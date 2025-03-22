"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';
import TransitionLink from '../utils/TransitionLink';

const MobileNavbar = () => {
    const navlinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Services",
            path: "/services"
        },
        {
            name: "Resume",
            path: "/resume"
        },
        {
            name: "Works",
            path: "/works"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ];

    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex justify-end'>
            <button className='text-2xl bg-primarycolor p-2 rounded' onClick={() => setMenuOpen(true)}>
                <FaBars />
            </button>

            {menuOpen &&
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.5, type: "spring" }} className={`w-full min-h-screen flex  justify-center items-center fixed top-0 left-0 bg-primarycolor`}>
                    <button className='fixed top-5 right-5 text-xl bg-secondarycolor p-4 rounded' onClick={() => setMenuOpen(false)}><IoMdClose /></button>
                    <ul className="w-full flex justify-center flex-col gap-4 items-center h-full">
                        {
                            navlinks.map((link, index) => {
                                return (
                                    <li key={index} className={`text-xl font-bold ${pathname === link.path ? "text-secondarycolor" : "text-white"} hover:text-secondarycolor transition-all ease-out duration-200`}><TransitionLink href={link.path}  onClick={() => setMenuOpen(false)}>{link.name}</TransitionLink></li>
                                )
                            })
                        }
                    </ul>
                </motion.div>
            }
        </div>
    )
}

export default MobileNavbar