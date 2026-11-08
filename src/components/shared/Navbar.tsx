'use client'
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { usePlan } from '@/context/PlanContext';



const Navbar = () => {
    const {planIds} = usePlan()
    return (
        <nav className='border-b border-gray-700'>
            <div className="navbar bg-base-100 shadow-sm container mx-auto top-0 sticky z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link href={"/"}>WorkOut</Link>
                        <Link href={"/my-plan"}>My Plan</Link>
                    </ul>
                </div>
                <div className='flex'>
                    <Image src={logo} alt='logo' className='rotate-90 h-10 w-8'/>
                    <a className="btn btn-ghost text-3xl">FITLOG</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link href={"/"}>WorkOut</Link>
                    <Link href={"/my-plan"}>My Plan</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href={"/my-plan"}className="btn">Plan <span>{planIds.length}</span></Link>
                <a className="btn">Saved 0</a>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;