import React, { useEffect, useState } from "react";

const Getdata = ()=>{

    const [personajes, setPersonajes] = useState([])

    let numbers = [1,2,3,4,5]
    let perro = {
        name:'lukas',
        raza: 'gato'
    }

    function getCharacters(){
        console.log('getCharacters')
        fetch('https://rickandmortyapi.com/api/character')
        .then( (response)=> response.json())
        .then( (data)=> setPersonajes(data.results) )
        // .then( (data)=> console.log(data.results) )
    }

    useEffect(()=>{
        console.log('se cargo el componente Getdata ')
        getCharacters()

    }, [])

   
    return(
        <>
            <h1>Getdata</h1>
            {personajes.map( (personaje, index)=> <p key={personaje.id}> personaje {personaje.id} : {personaje.name} <img src={personaje.image}  />  </p> )}
        </>
    )
}

export default Getdata