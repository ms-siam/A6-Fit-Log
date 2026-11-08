"use client"

import { createContext, useContext, useState } from "react"

type PlanContextValue = {
    planIds: number[],
    saveIds: number[],
    addToPlan: (id:number)=>void,
    removeFromPlan: (id:number)=>void,
    toggleSave: (id:number)=>void,
    removeFromSaved: (id:number)=>void
}

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({children}:{children:React.ReactNode}){
    const [planIds, setPlanIds] = useState<number[]>([])
    const [saveIds, setSaveIds] = useState<number[]>([])

    function addToPlan(id:number){
        setPlanIds([...planIds, id])
    }

    function removeFromPlan(id:number){
        setPlanIds(planIds.filter((planId) => planId !== id))
    }

    function toggleSave(id:number){
        if(saveIds.includes(id)){
            setSaveIds(saveIds.filter((saveId) => saveId !== id))
        } else {
            setSaveIds([...saveIds, id])
        }
    }

    function removeFromSaved(id:number){
        setSaveIds(saveIds.filter((saveId) => saveId !== id))
    }

    return(
        <PlanContext.Provider value={{planIds, saveIds, addToPlan, removeFromPlan, toggleSave, removeFromSaved}}>
            {children}
        </PlanContext.Provider>
    )
}

export function usePlan(){
    const ctx = useContext(PlanContext)
    if(!ctx) throw new Error('usePlan must be use inside <PlanProvider>')
    return ctx
}