import PlanView from '@/components/PlanView';
import React from 'react';

const getExerciseData = async () => {
    'use cache'
    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching exercise data:", error);
        return [];
    }
};

const MyPlanPage = async() => {
    const ExerciseData = await getExerciseData()
    return (
        <main className="mx-auto container px-4 py-10">
            <h1 className="text-5xl font-bold uppercase text-white">MY PLAN</h1>
            <p className="mt-2 text-lg text-gray-400">Cap of five lifts for today. Finish them, then load more.</p>
            <PlanView ExerciseData={ExerciseData}></PlanView>
        </main>
    );
};

export default MyPlanPage;