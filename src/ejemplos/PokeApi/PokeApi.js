import { useEffect, useState } from "react"


const PokeApi = () =>{

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(10017)
    console.log(id)
    

    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })
    },[id])

    const handleSiguiente = () =>{
        setId(id + 1)
    }

    const handleAnterior = () =>{
        id > 1 && setId(id - 1)
    }

    return(
        <div>
            <h2>PokeApi</h2>
            <hr/>
            

            {
                
                pokemon &&
                    <div>
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
            }
            <button onClick={handleAnterior}>Anterior</button>
            <button onClick={handleSiguiente}>Siguiente</button>
            

        </div>
    )
}

export default PokeApi