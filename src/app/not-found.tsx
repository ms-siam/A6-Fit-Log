import Link from 'next/link';
import { FaDumbbell } from 'react-icons/fa';

const NotFound = () => {
    return (
        <main className="container mx-auto flex flex-col items-center gap-4 px-4 py-24 text-center">
            <div className="rounded-3xl bg-[#1a1a1c] p-8">
                <div className="flex h-40 w-64 items-center justify-center rounded-2xl border border-gray-800 bg-[#101216]">
                    <FaDumbbell className="text-7xl text-[#C4F000]" />
                </div>
            </div>
            <h1 className="text-4xl font-bold uppercase text-white">404 — Missed that lift</h1>
            <p className="max-w-md text-gray-400">
                The page you wanted is not in the library. Head back to the floor and pick a workout that exists.
            </p>
            <Link href="/" className="rounded-full bg-[#C4F000] px-6 py-3 font-bold text-black">
                Back to workouts
            </Link>
        </main>
    );
};

export default NotFound;