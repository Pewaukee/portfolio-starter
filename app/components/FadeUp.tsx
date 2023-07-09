// use client component for rendering fade-up components
// using AOS library
'use client';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface FadeUpProps {
    children: React.ReactNode;
    className?: string; // optional styling
}

function FadeUp({children, className}: FadeUpProps) {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div 
            data-aos="fade-up" 
            data-aos-duration="500"
            className={className ? className : ''} /** optional arg checking */
        >
            {children}
        </div>
    )
}

export default FadeUp;