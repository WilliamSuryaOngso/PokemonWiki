import { Card, CardContent, CardMedia } from "@mui/material";
import { DetailPokemon } from "../Interfaces";


interface PokemonAvatarProps {
    pokemon: DetailPokemon
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => {


    return (
        <Card>
            <CardContent>
                <CardMedia
                    component="img"
                    image={pokemon.sprites.other["official-artwork"].front_default}
                    title={pokemon.name}
                />

            </CardContent>
        </Card>
    )
}

export default PokemonAvatar