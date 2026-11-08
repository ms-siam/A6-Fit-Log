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
        <main>
            <h1>MY PLAN</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
            <PlanView ExerciseData={ExerciseData}></PlanView>
        </main>
    );
};

export default MyPlanPage;