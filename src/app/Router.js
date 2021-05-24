import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Card } from './../pages/Card'
import { HomePage } from './../pages/HomePage'

export const Router = () => {
  const [anime, setAnime] = React.useState();
  const [favorites, setFavorites] = React.useState([])


  function handleSetFavorites(anime) {
    setFavorites([...favorites, anime]);
    console.log(favorites)

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