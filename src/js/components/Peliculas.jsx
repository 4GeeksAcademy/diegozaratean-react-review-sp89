import React, { useState } from "react";


const Peliculas = ()=>{

    const [favoritas, setFavoritas] = useState(['Back to the future','indiana jones','star wars','la vida es bella','interstellar','interstellar'])
    let nombrepelicula = 'intocables'

    function add(){
        console.log('add')
        let elementos = [1,2,3,4,5]
        console.log(elementos)
        elementos.push(6)
        console.log(elementos)

        console.log(favoritas)
        console.log(...favoritas)
        // favoritas.push('star trek')
        // console.log(favoritas)
        // favoritas = ['star trek']
        setFavoritas([...favoritas,'joker'])


    }
    return(
        <div>
            <h1>Peliculas</h1>
            <h2 className="text-center">{nombrepelicula}</h2>
            <p>{favoritas}</p>
            {favoritas.map( (item,index)=> <p key={index}>Pelicula favorita {index}: {item} </p> )}

            <p>el total de favoritos es {favoritas.length}</p>
            <button onClick={()=>add()}>Agregar</button>
        </div>

    )
}

export default Peliculas


// PSEUDOCODIGO
// agregar un input al html
// DONE: mostrar un lista en react
// DONE:agregar un elemento a una lista
// DONE:quitar un elemento a una lista
// cuando hago over sobre la lsita se debe actiuvar el bootn de eliminar tarea
// DONE:mostrar el total de tareas
// DONE:hacer que la lista de sea una variable con memoria
// DONEidentificar cuabndo el doy enter al input
// DONEtener trazabilidad o memoria de lo que el usuario ingresa en el input
// hcaer que graficaente se muestra la lista como en el diseño(meterle el estilo)
// hace restilo del contador total
