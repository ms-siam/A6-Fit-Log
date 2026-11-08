import Link from 'next/link';
import React from 'react';

const PlanView = () => {
    return (
        <>
            <div>
                <div>Exercises <strong>0</strong></div>
                <div>Minutes <strong>0</strong></div>
                <div>Calories <strong>0</strong></div>
            </div>

            <div>
                <button>Today&apos;s Plan</button>
                <button>Saved</button>
            </div>

            <label>
                Sort By
                <select>
                    <option>Duration</option>
                    <option>Calories</option>
                    <option>Rating</option>
                </select>
            </label>

            <div>
                <h2>Nothing here yet</h2>
                <Link href="/">Go to workouts</Link>
            </div>
        </>
    );
};

export default PlanView;