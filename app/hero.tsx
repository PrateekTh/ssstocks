import React from 'react'
import { buttonVariants } from "@/components/ui/button";
import { ArrowBigDownDash } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="flex flex-col mt-5 lg:flex-row gap-5 mx-auto lg:w-5/6 items-center">
        <div><Image className='logo-main w-[200px] md:w-[300px]' src="/logo.svg" alt="logo" width={300} height={300} /> </div>
        <div className="w-1/6"> </div>
        <div> 
            <div className="lg:text-5xl text-3xl font-bold">Compare Realtime Stocks like never before.</div>
            <br/>
            <div className="text-lg lg:w-11/12">
                Browse through thousands of companies tracked by our low-latency servers with advanced visualisations that will help you never make a wrong call.
            </div>
            <br/>
            <div className='flex gap-2 flex-col lg:flex-row hover:text-teal-400'>
                <div className="text-lg font-bold">You make the choice,</div>
                <div className="text-lg font-bold">we'll back it up</div>
            </div>
            <br/>
            <div>
                <Link className={buttonVariants({ variant: "secondary" })} href={"#explore"}>
                    <span className="font-bold text-lg">Try Now</span> <ArrowBigDownDash />
                </Link>
            </div>				
        </div>
    </div>
  )
}

export default HeroSection