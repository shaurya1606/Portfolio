import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
    return (
        <div
        className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        {/* can change the color  */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text bg-gradient-to-b #fff from-natural-50 #ffff  to-natural-400">Master The Art Of Music</h1>
                <p className="mt-4 font-normal ext-base md:text-lg #fff text-neutral-300 max-w-lg mx-auto"
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus deleniti nam harum ipsum inventore! Repudiandae animi facilis molestiae libero ea impedit, laboriosam iure quae aliquid?</p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                         <Button 
                         borderRadius="2rem"
                         className="bg-white dark:bg-black text-black dark:text-white order-neutral-200 dark:border-slate-800"
                         >Explore Courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection