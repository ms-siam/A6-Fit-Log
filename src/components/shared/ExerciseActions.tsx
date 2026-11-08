'use client'

import { usePlan } from "@/context/PlanContext";



const ExerciseActions = ({ id }: { id: number }) => {
    
    const { addToPlan } = usePlan()
    return (
        <>
        <button onClick={()=>addToPlan(id)}
            className="rounded-full bg-[#C4F000] px-6 py-3 font-bold text-black">
            Add to today&apos;s plan
        </button>
        <button className="rounded-full border border-white px-6 py-3 font-bold text-white">
            Save for later
          </button>
        </>
    );
};

export default ExerciseActions;