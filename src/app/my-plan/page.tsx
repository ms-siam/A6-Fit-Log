import PlanView from '@/components/PlanView';
import React from 'react';

const MyPlanPage = () => {
    return (
        <main>
            <h1>MY PLAN</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
            <PlanView></PlanView>
        </main>
    );
};

export default MyPlanPage;