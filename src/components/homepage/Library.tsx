import { ExerciseCardType } from '@/types/exercise.type';
import React from 'react';
import ExerciseCard from '../shared/ExerciseCard';


const getExerciseCard = async () => {
    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching exercise data:", error);
        return [];
    }
};


const Library = async () => {

    const ExerciseData = await getExerciseCard()
    console.log(ExerciseData.length)
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-4xl my-5'>THE LIBRARY</h2>
            <p className='text-[#A4A5AB] text-xl mb-5'>Twelve lifts covering every major muscle group.</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                {ExerciseData.map((exercise: ExerciseCardType) => {
                    return <ExerciseCard key={exercise.id} exerciseCard={exercise} />;
                })}
            </div>
        </div>
    );
};

export default Library;