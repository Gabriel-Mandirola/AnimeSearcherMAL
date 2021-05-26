import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Card } from './../pages/Card'
import { HomePage } from './../pages/HomePage'
import styled from 'styled-components'

export const Router = () => {
  const [anime, setAnime] = React.useState();
  const [favorites, setFavorites] = React.useState(() =>
    JSON.parse(window.localStorage.getItem("anime")))

  const [favoritos, setFavoritos] = React.useState(() =>
    JSON.parse(window.localStorage.getItem("anime")));

  React.useEffect(() => {
    window.localStorage.setItem("anime", JSON.stringify(favorites))
  }, [favorites])


  function handleSetFavorites(anime) {
    setFavorites([anime])
    favorites && setFavorites([...favorites, anime]);
    console.log(favorites)
    console.log(favoritos)
  }

  function deleteFav(animeMal_id) {
    setFavorites(favorites.filter((favorite) => favorite.mal_id !== animeMal_id))
    console.log(favorites.filter((favorite) => favorite.mal_id !== animeMal_id))

  }

  console.log(favorites)

  function handleSetAnime(anime) {
    setAnime(anime)
  }
  return (
    <BrowserRouter>
      < Switch>
        <Route path="/card">
          <CardStyle style={{ backgroundImage: "url(imagenes/FondoNubesAnime.jpg)" }}>
            <Card anime={anime} addFavorite={handleSetFavorites} favorites={favorites} deleteFav={deleteFav} setAnime={handleSetAnime} />
          </CardStyle>
        </Route>
        <Route path="/">
          <HomePage setAnime={handleSetAnime} favorites={favorites} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;


const CardStyle = styled.div`
background-color: lightskyblue;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
button{
  display: flex;
  gap: 20px;
  border-radius: 6px; 
    cursor: pointer;
    background: linear-gradient(to right,#2E51A2,#1B7AC2);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 6px;
    font-weight: 600;
    transition: 1s; 
    &:hover{
   filter: brightness(0.8);
   
   background: linear-gradient(to right,#1B7AC2,#2E51A2);  
 }
}
`