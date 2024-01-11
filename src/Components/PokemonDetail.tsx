import { useParams } from "react-router-dom"
import usePokemon from "../Hooks/usePokemon"
import { Box, Button, Container, Grid} from "@mui/material"
import PokemonAvatar from "./PokemonAvatar"
import PokemonAbilities from "./PokemonAbilities"
import { Link } from "react-router-dom"

const PokemonDetail = () => {
    let { pokedexNumber } = useParams()

    const { pokemon, isLoading } = usePokemon({ pokedexNumber })

    return (
        <Container>
            <Grid container flexDirection="column" alignItems="center" justifyContent="center" spacing={2} mt={1}>
                <Grid item container alignItems="center" justifyContent="center" spacing={2}>
                    {isLoading ? (
                        <Box>
                            Loading...
                        </Box>
                    ) : pokemon ? (
                        <>
                            <Grid item xs={12} sm={6}>
                                <PokemonAvatar pokemon={pokemon} />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <PokemonAbilities pokemon={pokemon} />
                            </Grid>
                        </>
                    ) : (
                        <Box>Poke not found</Box>
                    )}
                </Grid>
                <Button component={Link} to={"/Pokemon"} variant="contained"  >Back</Button>

            </Grid>
        </Container>
    )

}

export default PokemonDetail