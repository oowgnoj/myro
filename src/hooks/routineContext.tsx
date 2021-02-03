import React, {useState, useEffect, createContext, useMemo} from 'react'
import {getRoutines} from 'src/lib/api';
import { IRoutine } from 'src/types';

interface IRoutineContext {
    routines: IRoutine[]
    requestRoutine: ()=> void
}

const RoutineContext = createContext<IRoutineContext>({
    routines: [],
    requestRoutine: undefined,
})


const RoutineProvider = ({children})=> {
    const [routines, setRoutines] =useState<IRoutine[]>([])

    const requestRoutine = async ()=> {
        const {data} = await getRoutines();
        setRoutines(data)
    }
    const providerValue = useMemo(() => ({routines, requestRoutine}), [routines])
    return (
        <RoutineContext.Provider value={providerValue}>
            {children}
        </RoutineContext.Provider>
    )
}

export {RoutineProvider}
export default RoutineContext