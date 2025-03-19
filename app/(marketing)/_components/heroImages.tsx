import Image from "next/image";

export default function HeroImages(){
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image  src="/image1.jpg" alt="image1" fill className="object-contain"/>
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image src="/image2.jpg" fill className="object-contain" alt="image2"/>
                </div>
            </div>
        </div>
    )
}