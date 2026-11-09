'use client'
import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const emptySubscribe = () => () => {}

const NavLinks = () => {
    const pathname = usePathname()
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    )

    return (
        <>
            <Link
                href={"/"}
                className={`rounded-xl px-4 py-2 text-lg ${
                    mounted && pathname === "/" ? "bg-[#1a1a1c] text-[#C4F000]" : "text-white"
                }`}
            >
                Workouts
            </Link>
            <Link
                href={"/my-plan"}
                className={`rounded-xl px-4 py-2 text-lg ${
                    mounted && pathname === "/my-plan" ? "bg-[#1a1a1c] text-[#C4F000]" : "text-white"
                }`}
            >
                My Plan
            </Link>
        </>
    );
};

export default NavLinks;