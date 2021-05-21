import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Card} from './../pages/Card'
import {HomePage} from './../pages/HomePage'
import styled, { css } from 'styled-components'
export const Router = () => {
  const [anime, setAnime] = React.useState();
  const [favorites, setFavorites] = React.useState([{}])

  console.log(anime)
  function handleSetAnime(anime){
    setAnime(anime)
  }
    return (
          <BrowserRouter>
         < Switch>
           <Route path="/card">
             <div className="hola">
             <Card anime={anime}/>
             </div>
           </Route>
           <Route path="/">
             <HomePage setAnime={handleSetAnime}/>
           </Route>   
          </Switch>
         </BrowserRouter>       
        )
}

export default Router;