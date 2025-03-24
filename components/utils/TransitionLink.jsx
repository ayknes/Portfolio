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
        
        // Add transition classes immediately
        body?.classList.add("page-transition", "opacity-0");
        body?.classList.add("overflow-hidden");
        
        // Shorter initial delay
        await sleep(100);
        
        // Push to new route
        router.push(href);
        
        // Wait for new page to load
        await sleep(300);
        
        // Fade in the new page
        body?.classList.remove("opacity-0");
        body?.classList.remove("page-transition");
        
        // Small delay before removing overflow hidden
        await sleep(100);
        body?.classList.remove("overflow-hidden");
    }

    return (
        <Link href={href} onClick={(e) => handleTransition(e, onClick)} {...props}>
            {children}
        </Link>
    )
}

export default TransitionLink