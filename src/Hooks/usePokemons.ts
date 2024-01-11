import { useEffect, useState } from "react";
import { IndexedPokemon, pokemonListResponse } from "../Interfaces";
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL } from "../constants";
import { httpClient } from "../api/httpClient";
import { ListPokemon } from "../Interfaces";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<ListPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>
        (POKEMON_API_POKEMON_URL)

    useEffect(() => {
        fetchPokemon()
    }, [])

    const IndexedPokemonToListPokemon = (indexedPokemon:IndexedPokemon)=>{
        const pokedexNumber = parseInt(indexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`,"").replace("/",""))
        const listPokemon:ListPokemon = {
            name: indexedPokemon.name,
            url:indexedPokemon.url,
            image:`${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
            pokedexNumber
        }

        return listPokemon
    }



    const fetchPokemon = async () => {
        if (nextUrl) {
            const result = await httpClient.get<pokemonListResponse>(nextUrl)
            console.log(result)

            if (result?.data?.results) {
                const listPokemon = result.data.results.map(p=>IndexedPokemonToListPokemon(p))
                setPokemons([...pokemons,...listPokemon])
                setNextUrl(result.data.next)
            }
        }
    }

    return {
        pokemons,
        fetchNextPage:fetchPokemon,
        hasMorePokemon: !!nextUrl,
    }
}

export default usePokemons