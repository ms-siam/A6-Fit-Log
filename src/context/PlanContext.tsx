"use client"

import { createContext, useContext, useState } from "react"

type PlanContextValue = {
    planIds: string[],
    addToPlan: (id:string)=>void
}

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({children}:{children:React.ReactNode}){
    const [planIds, setPlanIds] = useState<string[]>([])

    function addToPlan(id:string){
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