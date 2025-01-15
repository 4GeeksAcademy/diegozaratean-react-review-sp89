import React, { useState } from "react";

const Onkey = ()=>{

    const [entrada, setEntrada] = useState('hacer 12 repeticiones')

    function bajoTecla(e){
        console.log('bajoTecla')
        console.log(e.key)
        console.log(e.keyCode)
        if( e.key === 'Enter' ){
            console.log('oprimiste ENTER')
        }
    }

   
    return(
        <>
            <h1>Onkey</h1>
            <input onKeyDown={bajoTecla} type="text" value={entrada} onChange={(e)=>setEntrada(e.target.value)} />
        </>
    )
}

export default Onkey