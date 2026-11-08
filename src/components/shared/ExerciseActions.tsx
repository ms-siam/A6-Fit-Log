'use client'

import { usePlan } from "@/context/PlanContext";
import { toast } from "react-toastify";

const ExerciseActions = ({ id }: { id: number }) => {
    const { planIds, saveIds, addToPlan, toggleSave } = usePlan()

    const handleAddToPlan = () => {
        if (planIds.includes(id)) {
            toast.error("Already in your plan")
            return
        }
        if (planIds.length >= 5) {
            toast.error("Plan is full (5 lifts max)")
            return
        }
        addToPlan(id)
        toast.success("Added to today's plan")
    }

    const handleSave = () => {
        if (saveIds.includes(id)) {
            toggleSave(id)
            toast.success("Removed from saved")
            return
        }
        toggleSave(id)
        toast.success("Saved for later")
    }

    return (
        <>
        <button onClick={handleAddToPlan}
            className="rounded-full bg-[#C4F000] px-6 py-3 font-bold text-black">
            Add to today&apos;s plan
        </button>
        <button onClick={handleSave}
            className="rounded-full border border-white px-6 py-3 font-bold text-white">
            {saveIds.includes(id) ? "Saved" : "Save for later"}
        </button>
        </>
    );
};

export default ExerciseActions;