import { Button, Container } from "@mui/material";
import PokemonList from "../Components/PokemonList";
import usePokemons from "../Hooks/usePokemons"



const Pokemon = () => {

    const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();

    return (
        <Container>
            <PokemonList pokemons={pokemons}></PokemonList>
            {hasMorePokemon ?
                (
                    <Button variant="contained" onClick={fetchNextPage}>
                        Load More Pokemon
                    </Button>
                ) : null}

        </Container>
    )
}

export default Pokemon