import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Card } from './../pages/Card'
import { HomePage } from './../pages/HomePage'

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
          <div className="cardStyle">
            <Card anime={anime} addFavorite={handleSetFavorites} favorites={favorites} deleteFav={deleteFav} setAnime={handleSetAnime} />
          </div>
        </Route>
        <Route path="/">
          <HomePage setAnime={handleSetAnime} favorites={favorites} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;