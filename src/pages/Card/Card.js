import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components';

const AnimeFavoritos = ({ nombre, imagen, id, link }) => (
    <div>
        {/* <img src={imagen} /> */}
        <Links href={link}>
            <p>{nombre}</p>
        </Links>
    </div>
);

export const Card = ({ anime, addFavorite, favorites, deleteFav }) => {
    const [animeData, setAnimeData] = React.useState();
    const [status, setStatus] = React.useState("idle");

    React.useEffect(() => {
        setStatus("loading");
        console.log(animeData)
        console.log(status)
        fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}&limit=1`)
            .then((response) => {
                response.json().then((data) => {
                    setAnimeData(data.results)
                    if (data.results.length !== 0) {
                        setAnimeData(data.results)
                        setStatus("idle")
                    } else {
                        setStatus("error")
                    }
                })
            })
    }, [])
    const favoritesID = favorites && favorites.map((favorites) => favorites.mal_id)

    function isAnimeAdded() {
        if (animeData && animeData[0].mal_id !== undefined) {
            console.log(status)
            return animeData && favoritesID && favoritesID.includes(animeData[0].mal_id);

        } else {
            setStatus("error")
            console.log(status)
        }
    }

    const history = useHistory()

    if (status === "idle") {
        return (
            <>
                <button onClick={() => history.push("/")}>Volver</button>
                {
                    animeData && (<ImagenBoxContent><ImagenBox>
                        <Links href={animeData[0].url}>
                            <img src={animeData[0].image_url} alt={animeData[0].title} />
                            <Titulo>{animeData[0].title}</Titulo>
                        </Links>
                    </ImagenBox>
                        <button onClick={isAnimeAdded() ?
                            () => deleteFav(animeData[0].mal_id) :
                            () => addFavorite(animeData[0])}>
                            {isAnimeAdded() ? "Borrar de favoritos" : "Agregar a favoritos"}
                        </button>
                    </ImagenBoxContent>
                    )
                }
                <FavoritesWrapper>
                    {favorites && Object.keys(favorites).map((index) =>
                        <BoxFavoritosSI>
                            <AnimeFavoritos
                                // imagen={favorites[index].image_url}
                                link={favorites[index].url}
                                nombre={favorites[index].title}
                            />
                        </BoxFavoritosSI>
                    )}
                </FavoritesWrapper>
            </>
        )
    } else if (status === "loading") {
        return (
            <h1>Cargando</h1>
        )
    } else if (status === "error") {
        return (
            <div>
                <button onClick={() => history.push("/")}>Volver</button>
                <h1>Algo salio mal</h1></div>
        )
    }
}


const FavoritesWrapper = styled.div`
 display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `

const ImagenBoxContent = styled.div`
display: contents;
`

const ImagenBox = styled.div`
background-color: whitesmoke;
  border-top: 25px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 360px;
  width: 225px;
  flex-wrap: wrap;
  overflow: hidden;
  :hover {
            animation: effect 0.4s ;
            animation-duration: 0.4s;
        } 
        @keyframes effect {
            0% {
                transform: translateX(0px) rotate(0deg);
            }
  
            20% {
                transform: translateX(-4px) rotate(-4deg);
            }
  
            40% {
                transform: translateX(-2px) rotate(-2deg);
            }
  
            60% {
                transform: translateX(4px) rotate(4deg);
            }
  
            80% {
                transform: translateX(2px) rotate(2deg);
            }
  
            100% {
                transform: translateX(0px) rotate(0deg);
            }
        }
  img{
 height: 320px;
 width: 225px;
 p{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
 }
}
`
const BoxFavoritosSI = styled.div`
background-color: whitesmoke;
  border-top: 25px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 5px;
  transition: 5s;
  :hover {
            animation: effect 0.4s ;
            animation-duration: 0.4s;
        } 
        @keyframes effect {
            0% {
                transform: translateX(0px) rotate(0deg);
            }
  
            20% {
                transform: translateX(-4px) rotate(-4deg);
            }
  
            40% {
                transform: translateX(-2px) rotate(-2deg);
            }
  
            60% {
                transform: translateX(4px) rotate(4deg);
            }
  
            80% {
                transform: translateX(2px) rotate(2deg);
            }
  
            100% {
                transform: translateX(0px) rotate(0deg);
            }
        }
  img{
  height: 320px;
  width: 205px;
}

 p{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #343434;
  font-weight: bold;
  box-sizing: border-box;
  width: 100%; 
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 14px; 
}
`
const Titulo = styled.p`
color: #343434;
  font-weight: bold;
  box-sizing: border-box;
  height: 40px;
  width: 100%; 
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 14px;
  white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`
const Links = styled.a`
text-decoration: none; 
`



