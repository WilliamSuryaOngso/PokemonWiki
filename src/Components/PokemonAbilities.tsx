import { Card, CardContent, Typography } from "@mui/material";
import { DetailPokemon } from "../Interfaces";


interface PokemonAbilitiesProps {
    pokemon: DetailPokemon
}

const PokemonAbilities = ({ pokemon }: PokemonAbilitiesProps) => {


    return (
        <Card>
            <CardContent>
                <Typography variant="h4" sx={{ textTransform:"capitalize" }}>
                    {pokemon.name}
                </Typography>

                <Typography variant="h5">
                    Type
                </Typography>
                <>

                    {pokemon.types.map((types) => {
                        return (
                            <Typography variant="body1">
                                {types.type.name}
                            </Typography>
                        )
                    })}

                    <Typography variant="h5">
                        Abilities
                    </Typography>
                    {pokemon.abilities.map((ability) => {
                        return (
                            <Typography variant="body1">
                                {ability.ability.name}
                            </Typography>
                        )
                    })}
                </>
            </CardContent>
        </Card>
    )
}

export default PokemonAbilities