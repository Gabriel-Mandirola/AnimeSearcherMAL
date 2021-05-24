import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components';
const AnimeInfo = ({ nombre, imagen }) => (
    <div>
        <img src={imagen} />
        <div>
            <p>{nombre}</p>
        </div>
    </div>
);

const AnimeFavoritos = ({ nombre, imagen, id }) => (
    <div>
        {/* <img src={imagen} /> */}
        <p>{nombre}</p>
    </div>


);


let AnimeList = [];

export const Card = ({ anime, addFavorite, favorites, deleteFav }) => {

    const [animeData, setAnimeData] = React.useState();
    const [status, setStatus] = React.useState("idle");


    const [favoritos, setFavoritos] = React.useState(() =>
        JSON.parse(window.localStorage.getItem("anime")));
    React.useEffect(() => {
        window.localStorage.setItem("anime", JSON.stringify(favorites))
    }, [favoritos])


    React.useEffect(() => {
        setStatus("loading")
        fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}&limit=1`).then((response) =>
            response.json().then((data) => setAnimeData(data.results)).catch(error => setStatus("error")).finally(setStatus("idle"))
        );

    }, [anime])

    const favoritesID = favorites.map((favorites) => favorites.mal_id)

    const isAnimeAdded =
        animeData && favoritesID.includes(animeData[0].mal_id)

    const history = useHistory()
    // https://api.jikan.moe/v3/anime/431
    //console.log(data)
    //setAnimeData(data)
    //https://api.jikan.moe/v3/search/anime?q={anime}&limit=2
    //https://pokeapi.co/api/v2/pokemon/pikachu

    // function renderAnimes() {
    //     const animeList = [];

    //     this.animeData.forEach((AnimeInfo) =>{
    //         let nombre = AnimeInfo.results.title;
    //         let imagen = AnimeInfo.results.image_url;
    //         animeList.push(<AnimeInfo nombre={nombre} imagen={imagen}/>)
    //     });
    //     return animeList;
    // }

    // function iterateAnimes(){
    //     {animeData &&(
    //     Object.keys(animeData).map((animeInfo)=>(
    //         <div> 
    //          imagen = {animeInfo.image_url}
    //          nombre = {animeInfo.title}                            
    //          key = {animeInfo.mal_id}
    //         </div> 

    //     ) ))}
    // }

    if (status === "idle") {
        return (
            <>
                {/* <div className="boxFavoritos">
                    {Object.keys(favoritos).map((index) => (
                        <AnimeFavoritos
                            nombre={favoritos[index].title}
                        />
                    ))}</div> */}
                {/* <h1>{favoritos.nombre}{favoritos.genero}</h1>
                <button onClick={() => setFavoritos({
                    nombre: favorites[0].title,
                    genero: favorites[0].mal_id

                })}></button> */}
                <button onClick={() => history.push("/")}>Volver</button>
                {
                    animeData && (<div className="imagenBoxContent" > <div className="imagenBox">
                        {/* {Object.keys(animeData).map((animeInfo, index) => (
                            <AnimeInfo
                                imagen={animeData[index].image_url}
                                nombre={animeData[index].title}
                                key={index}
                          />
                        ))} */}
                        <img src={animeData[0].image_url} alt={animeData[0].title} className="imagen" />
                        <p className="titulo">{animeData[0].title}</p>
                    </div>
                        <button onClick={isAnimeAdded ?
                            () => deleteFav(animeData[0].mal_id) :
                            () => addFavorite(animeData[0])}>
                            {isAnimeAdded ? "Borrar de favoritos" : "Agregar a favoritos"}
                        </button>
                    </div>
                    )
                }
                {/* <div>
                    {Object.keys(favoritos).map((index) => (
                        <AnimeFavoritos
                            nombre={favoritos[index].title}
                            imagen={favoritos[index].image_url}
                        />                    ))}
                </div> */}
                <div>
                    {/* <p>{favorites.map((favorite) => `${favorite.title}`)}</p> */}
                    <p>{Object.keys(favorites).map((index) =>
                        <div className="boxFavoritosSI">
                            <AnimeFavoritos
                                // imagen={favorites[index].image_url}
                                nombre={favorites[index].title}
                            /></div>
                    )}</p>
                </div>
            </>
        )

    } else if (status === "loading") {
        return (
            <h1>Cargando</h1>
        )
    } else if (status === "error") {
        return (
            <h1>Algo salio mal</h1>
        )
    }
    // <img src={animeData.results[0].image_url} alt={animeData.results[0].title} />  
    //<div>{renderAnimes()}</div>
}



