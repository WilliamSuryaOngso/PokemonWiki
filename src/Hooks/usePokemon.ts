import { useEffect, useState } from "react";
import { DetailPokemon } from "../Interfaces";
import { POKEMON_API_POKEMON_URL } from "../constants";
import { httpClient } from "../api/httpClient";

interface UsePokemonProps {
    pokedexNumber:number 
}

const usePokemon = ({pokedexNumber}:UsePokemonProps) => {
    const [pokemon, setPokemon] = useState<DetailPokemon>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        if(pokedexNumber){
            fetchPokemon()
        }
    },[pokedexNumber])

    const fetchPokemon = async () => {
        if (pokedexNumber) {
            setIsLoading(true)
            const url = `${POKEMON_API_POKEMON_URL}/${pokedexNumber}`
            const result = await httpClient.get<DetailPokemon>(url)
            console.log(result)
            if(result?.data){
                setPokemon(result.data)
            }
            setIsLoading(false)

        }
    }
    return {
        pokemon,
        isLoading
    };
}

export default usePokemon