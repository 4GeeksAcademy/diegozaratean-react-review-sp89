import React, { useState, useEffect } from "react";

const Counter = ()=>{

    const [count , setCount] = useState(0)
    const [restar, setRestar] = useState(20)

    // useEffect(que voy hacer caundo cambie,a quien debo mirar)
    useEffect(()=>{
        console.log('count cambio ')
    },[count])

    useEffect(()=>{
        console.log('restar cambio')
    },[restar])

    useEffect(()=>{
        console.log('restar o count cambio')
    },[restar,count])

    useEffect(()=>{
        console.log('que pasa aqui')
    },[])


    return(
        <>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={()=>{setCount(count + 1) }}>Agregar</button>
            <p>{restar}</p>
            <button onClick={()=>{setRestar(restar - 1 )}}>Restar</button>
            
        </>
    )
}

export default Counter