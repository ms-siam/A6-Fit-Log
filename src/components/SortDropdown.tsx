'use client'
import { useState } from 'react';
import { RxCheck, RxChevronDown, RxChevronUp } from 'react-icons/rx';
export type SortOption = 'Duration' | 'Calories' | 'Rating'

const options: SortOption[] = ['Duration', 'Calories', 'Rating']

const SortDropdown = ({
    value,
    onChange,
}: {
    value: SortOption
    onChange: (option: SortOption) => void
}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative flex flex-col gap-2 md:w-80">
            <span className="text-lg text-white">Sort By</span>

            <button
                onClick={() => setOpen(!open)}
                className={`flex w-full items-center justify-between rounded-full border bg-[#101216] px-5 py-3 text-white transition-all ${
                    open ? 'border-white ring-2 ring-white/60' : 'border-gray-700'
                }`}
            >
                {value}
                {open ? <RxChevronUp /> : <RxChevronDown />}
            </button>

            {open && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                    <ul className="absolute left-0 right-0 top-full z-20 mt-2 rounded-2xl border border-gray-800 bg-[#101216] p-2 shadow-lg">
                        {options.map((option) => (
                            <li key={option}>
                                <button
                                    onClick={() => {
                                        onChange(option)
                                        setOpen(false)
                                    }}
                                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-white hover:bg-[#1a1a1c]"
                                >
                                    <span className="w-4">
                                        {value === option && <RxCheck />}
                                    </span>
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default SortDropdown;