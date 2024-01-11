import { Card, Box, CardContent, Typography, CardMedia, CardActionArea } from "@mui/material";
import { ListPokemon } from "../Interfaces";
import { Link } from "react-router-dom";


interface PokemonCardProps {
    pokemon: ListPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    return (
        <Card>
            <CardActionArea>
                <Link to={`${pokemon.pokedexNumber}`} style={{ textDecoration: "none", color: "white" }}>
                    <CardMedia
                        component="img"
                        image={pokemon.image}
                        title={pokemon.name}
                        sx={{ height: 100, objectFit: "contain" }}
                    />
                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                                color: "Black",
                            }}
                        >
                            <Typography sx={{ textTransform: "capitalize" }}>
                                {pokemon.name}
                            </Typography>
                            <Typography sx={{ textTransform: "capitalize" }}>
                                #{pokemon.pokedexNumber}
                            </Typography>
                        </Box>
                    </CardContent>
                </Link>
            </CardActionArea>
        </Card>
    );
};


export default PokemonCard;