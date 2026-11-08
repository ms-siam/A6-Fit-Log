import Image from 'next/image';
import React from 'react';
import hero from '@/assets/banner.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 container mx-auto my-10 border border-gray-800 rounded-2xl p-5 md:p-10">
            <div className="hero-content grid grid-cols-1 items-center justify-center md:grid-cols-2">
                <div className='flex flex-col gap-4'>
                    <p className='text-[#C4F000]'>WORKOUT LIBRARY</p>
                    <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG <br className="hidden md:block" /> EVERY SET.</h1>
                    <p className="py-6 text-gray-600">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    <button className="btn w-40 bg-[#C4F000] text-black rounded-3xl">Browse Workouts</button>
                </div>
                <div className='flex justify-center items-center md:py-10'>
                    <Image src={hero} alt='Hero' className='justify-center md:scale-125'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;