import React, { useState } from "react";


const Peliculas = ()=>{

    const [favoritas, setFavoritas] = useState(['Back to the future','indiana jones','star wars','la vida es bella','interstellar','interstellar'])
    let nombrepelicula = 'intocables'
    return(
        <div>
            <h1>Peliculas</h1>
            <h2 className="text-center">{nombrepelicula}</h2>
            <p>{favoritas}</p>
            {favoritas.map( (item,index)=> <p key={index}>Pelicula favorita {index}: {item} </p> )}
        </div>

    )
}

export default Peliculas