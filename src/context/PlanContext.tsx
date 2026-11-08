"use client"

import { createContext, useContext, useState } from "react"

type PlanContextValue = {
    planIds: number[],
    addToPlan: (id:number)=>void
}

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({children}:{children:React.ReactNode}){
    const [planIds, setPlanIds] = useState<number[]>([])

    function addToPlan(id:number){
        setPlanIds([...planIds, id])
    }

    return(
        <PlanContext.Provider value={{planIds, addToPlan}}>
            {children}
        </PlanContext.Provider>
    )
}

export function usePlan(){
    const ctx = useContext(PlanContext)
    if(!ctx) throw new Error('usePlan must be use inside <PlanProvider>')
    return ctx
}