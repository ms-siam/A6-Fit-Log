'use client'
import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { usePlan } from '@/context/PlanContext';
import { Suspense } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
    const { planIds, saveIds } = usePlan()

    return (
        <nav className='sticky top-0 z-50 border-b border-gray-800 bg-[#101216]'>
            <div className="mx-auto flex container items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="cursor-pointer p-2 text-white">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="dropdown-content z-10 mt-3 flex w-52 flex-col gap-1 rounded-2xl border border-gray-800 bg-[#1a1a1c] p-2 shadow">
                            <Link href={"/"} className="rounded-xl px-4 py-2 text-white">Workouts</Link>
                            <Link href={"/my-plan"} className="rounded-xl px-4 py-2 text-white">My Plan</Link>
                        </ul>
                    </div>
                    <Link href={"/"} className='flex items-center gap-2'>
                        <Image src={logo} alt='logo' className='rotate-90 h-10 w-8' />
                        <span className="text-3xl font-medium uppercase text-white">FITLOG</span>
                    </Link>
                </div>

                <div className="hidden items-center gap-1 lg:flex">
                    <Suspense fallback={null}>
                        <NavLinks />
                    </Suspense>
                </div>

                <div className="flex items-center gap-6">
                    <Link href={"/my-plan"} className="flex items-center gap-2 font-bold text-white">
                        Plan
                        <span className="rounded-full bg-[#C4F000] px-2.5 py-0.5 text-sm text-black">
                            {planIds.length}
                        </span>
                    </Link>
                    <Link href={"/my-plan"} className="flex items-center gap-2 font-bold text-white">
                        Saved
                        <span className="rounded-full border border-white px-2.5 py-0.5 text-sm">
                            {saveIds.length}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;