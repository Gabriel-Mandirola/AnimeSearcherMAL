import React from 'react'

const AnimeInfo = ({ nombre }, { imagen }) => (
    <div>
        <img src={imagen} />
        <p>{nombre}</p>


    </div>
)

export const Card = ({ anime }) => {
    const [animeData, setAnimeData] = React.useState();

    React.useEffect(() => {
        fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}&limit=2`).then((response) =>
            response.json().then((data) => setAnimeData(data))
        );
        
    }, [])
    //console.log(data)
    //setAnimeData(data)
    //https://api.jikan.moe/v3/search/anime?q={anime}&limit=2
    //https://pokeapi.co/api/v2/pokemon/pikachu
    return (
        <>
            {animeData && (<div>
               
                        <img src={animeData.results[0].image_url} alt="anime" />



            </div>

            )}
        </>
    )



}
