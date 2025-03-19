"use client"
import { Button } from "@/components/ui/button"
import useScrollTop from "@/hooks/use-scroll-hook"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function NavBar(){
    const scrolled = useScrollTop()
    //cn come from shadcn and allows to add dynamic tailwind styles 
    return (
        <div className={cn("z-50 bg-background fixed top-0 flex items-center w-full p-6" , scrolled && "border-b shadow-sm")}>
            <Image src="/logo.jpg" alt="logo" width={50} height={50}/>
            <div className="flex w-full items-center justify-end">
                <Button>login</Button>
            </div>
        </div>
    )
}