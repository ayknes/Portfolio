"use client";
import Link from "next/link"
import Navbar from "./Navbar"
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 50){
             
                setScrolled(true);
            }
            else{
                setScrolled(false);
            };
        }
        
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
    },[]);

  return (
    <div className={`fixed top-0 left-0 z-50 w-full flex justify-center items-center ${scrolled ? "stickyheader":""}`}>
        <div className={`w-11/12 flex justify-center px-4 items-center ${scrolled ? "py-3":"py-6"}`}>
            <div className="flex-1">
                <div className="w-fit">
                <Link href={"/"}>
                <h4 className="text-xl font-bold">
                Otmane <span className="text-primarycolor">.</span>
                </h4>
                </Link>
                </div>
            </div>
            <div className="flex-1">
                <div className="md:block w-full hidden">
                <Navbar/>
                </div>
                <div className="md:hidden w-full block">
                <MobileNavbar/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header