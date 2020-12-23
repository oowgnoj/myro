import React, {useState, useEffect, createContext, useMemo} from 'react'
import {getRoutines} from 'src/lib/api';

const RoutineContext = createContext({
    routines: [],
    requestRoutine: undefined,
})


const RoutineProvider = ({children})=> {
    const [routines, setRoutines] =useState([])

    const requestRoutine = async ()=> {
        const {data} = await getRoutines();
        console.log("###### DATA ROUTINE", data)
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