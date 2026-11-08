'use client'
import { usePlan } from '@/context/PlanContext';
import { ExerciseCardType } from '@/types/exercise.type';
import Link from 'next/link';

const PlanView = ({ ExerciseData }: { ExerciseData: ExerciseCardType[] }) => {
    const { planIds } = usePlan()
    const planned = ExerciseData.filter((exercise) => planIds.includes(exercise.id))
    return (
        <>
            <div>
                <div>Exercises <strong>{planned.length}</strong></div>
                <div>Minutes <strong>0</strong></div>
                <div>Calories <strong>0</strong></div>
            </div>

            <div>
                <button></button>
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