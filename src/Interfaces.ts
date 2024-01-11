export interface ITask{
    taskName:string,
    deadLine:number;
}

export interface IndexedPokemon{
    name:string
    url:string
}

export interface pokemonListResponse{
    count:number
    next:string|null
    previous:string|null
    results: IndexedPokemon[]
}

export interface ListPokemon{
    name:string
    url:string
    image:string
    pokedexNumber:number
}

export interface DetailPokemon{
    name:string
    types:PokemonType[]
    image:string
    pokedexNumber:number
    abilities:PokemonAbility[]
    sprites:{
        other:{
            "official-artwork":{
                front_default:string
            }
        }
    }
}

export interface PokemonAbility{
    ability:{
        name:string
        url:string
    }
    is_hidden:boolean
    slot:number
}

export interface PokemonType{
    slot:number
    type:{
        name:string
        url:string
    }
}   