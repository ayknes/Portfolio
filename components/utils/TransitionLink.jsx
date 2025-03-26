"use client";
 import Link from "next/link";
import { useRouter } from "next/navigation";
 
 function sleep(ms) {
     return new Promise((resolve) => setTimeout(resolve, ms));
 
 }
 
 const TransitionLink = ({ href, children, onClick, ...props }) => {
     const router = useRouter();
     const handleTransition = async (e, callback) => {
         if (callback) callback();
         e.preventDefault();
         const body = document.querySelector("body");
         body?.classList.add("page-transition");
         body?.classList.add("overflow-hidden");
         await sleep(500);
         router.push(href);
         await sleep(800);
         body?.classList.remove("page-transition");
         await sleep(500);
         body?.classList.remove("overflow-hidden");
 
 
     }
     return (
         <Link href={href} onClick={(e) => { handleTransition(e, onClick) }} {...props}>{children}</Link>
     )
 }
 
 export default TransitionLink