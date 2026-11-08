'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxTimer, RxCross2, RxCheck } from 'react-icons/rx';
import { AiOutlineFire } from 'react-icons/ai';
import { CiStar } from 'react-icons/ci';
import { usePlan } from '@/context/PlanContext';
import { ExerciseCardType } from '@/types/exercise.type';
import SortDropdown from './SortDropdown';

const PlanView = ({ ExerciseData }: { ExerciseData: ExerciseCardType[] }) => {
    const { planIds } = usePlan()
    const [tab, setTab] = useState<'plan' | 'saved'>('plan')
    const planned = ExerciseData.filter((exercise) => planIds.includes(exercise.id))

    return (
        <div className="mt-8 flex flex-col gap-8">
            <div className="grid grid-cols-3 divide-x divide-dashed divide-gray-800 overflow-hidden rounded-3xl border border-gray-800 bg-[#1a1a1c]">
                <div className="p-4 md:p-8">
                    <p className="text-gray-400">Exercises</p>
                    <strong className="text-4xl font-bold text-[#C4F000] md:text-5xl">{planned.length}</strong>
                </div>
                <div className="p-4 md:p-8">
                    <p className="text-gray-400">Minutes</p>
                    <strong className="text-4xl font-bold text-white md:text-5xl">
                        {planned.reduce((total, exercise) => total + exercise.duration, 0)}
                    </strong>
                </div>
                <div className="p-4 md:p-8">
                    <p className="text-gray-400">Calories</p>
                    <strong className="text-4xl font-bold text-white md:text-5xl">
                        {planned.reduce((total, exercise) => total + exercise.caloriesBurned, 0)}
                    </strong>
                </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="flex w-fit gap-1 rounded-2xl border border-gray-800 bg-[#1a1a1c] p-1.5">
                    <button
                        onClick={() => setTab('plan')}
                        className={`rounded-xl px-5 py-3 text-lg transition-colors ${
                            tab === 'plan' ? 'bg-[#0f1115] text-[#C4F000]' : 'text-gray-400'
                        }`}
                    >
                        Today&apos;s Plan
                    </button>
                    <button
                        onClick={() => setTab('saved')}
                        className={`rounded-xl px-5 py-3 text-lg transition-colors ${
                            tab === 'saved' ? 'bg-[#0f1115] text-[#C4F000]' : 'text-gray-400'
                        }`}
                    >
                        Saved
                    </button>
                </div>

                <SortDropdown />
            </div>

            {tab === 'plan' && planned.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {planned.map((exercise) => (
                        <div
                            key={exercise.id}
                            className="flex flex-col gap-4 rounded-3xl border border-gray-800 bg-[#1a1a1c] p-5 md:flex-row md:items-center"
                        >
                            <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-2xl md:h-24 md:w-36">
                                <Image
                                    src={exercise.image}
                                    alt={exercise.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-bold uppercase text-white">{exercise.name}</h3>
                                <p className="text-gray-400">{exercise.equipment}</p>
                                <div className="mt-2 flex items-center gap-4 text-gray-400">
                                    <div className="flex items-center gap-1.5">
                                        <RxTimer className="text-[#C4F000]" />
                                        <span>{exercise.duration} min</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <AiOutlineFire className="text-[#C4F000]" />
                                        <span>{exercise.caloriesBurned} kcal</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <CiStar className="text-[#C4F000]" />
                                        <span>{exercise.rating}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link
                                    href={`/exercise/${exercise.id}`}
                                    className="rounded-full border border-white px-5 py-2 font-medium text-white"
                                >
                                    View Details
                                </Link>
                                <button className="flex items-center gap-2 rounded-full bg-[#C4F000] px-5 py-2 font-medium text-black">
                                    <RxCheck />
                                    Mark as Done
                                </button>
                                <button className="p-2 text-white" aria-label="Remove">
                                    <RxCross2 />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-gray-800 bg-[#1a1a1c] px-6 py-16 text-center">
                    <h2 className="text-3xl font-bold uppercase text-white">Nothing here yet</h2>
                    <p className="text-gray-400">Browse the library and add a lift to get today moving.</p>
                    <Link
                        href="/"
                        className="rounded-full bg-[#C4F000] px-6 py-3 font-bold text-black"
                    >
                        Go to workouts
                    </Link>
                </div>
            )}
        </div>
    );
};

export default PlanView;