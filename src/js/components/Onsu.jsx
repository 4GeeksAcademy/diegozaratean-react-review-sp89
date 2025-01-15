import React, { useState } from "react";

const OnSu = ()=>{

    const [entrada, setEntrada] = useState('hacer 12 repeticiones')

    function seEnvio(e){
        e.preventDefault()
        console.log('seEnvio')
        console.log('oprimiste ENTER')
    }
   
    return(
        <>
            <h1>OnSu</h1>
            <form onSubmit={seEnvio}  > 
                <input type="text" name='tarea' value={entrada} onChange={(e)=>setEntrada(e.target.value)} />
            </form>
        </>
    )
}

export default OnSu