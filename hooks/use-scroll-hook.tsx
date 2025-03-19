"use client"

import { useState , useEffect } from "react";

export default function useScrollTop( threshold = 10 ){
    const [scrolled , setScrolled] = useState(false)



    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > threshold){ //if scroll on y axis is more than threshold then change navbar ui
                setScrolled(true)
            }else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll" , handleScroll)
        return()=>window.removeEventListener("scroll" , handleScroll)
    } , [threshold])

    return scrolled ; 
}