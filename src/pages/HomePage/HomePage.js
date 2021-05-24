import styled from 'styled-components'
import { useHistory } from 'react-router'
import React from 'react'

let valueInput = ''
export const HomePage = ({ setAnime, favorites }) => {
  const [animeElejido, setAnimeElejido] = React.useState();


  const [favoritos, setFavoritos] = React.useState(() =>
    JSON.parse(window.localStorage.getItem("anime")));

  React.useEffect(() => {
    window.localStorage.setItem("anime", JSON.stringify(favoritos))
  }, [favoritos])

  const history = useHistory()

  function handleSearchClick() {
    setAnime(animeElejido)
    history.replace("/card")
  }

  function handleInputChange(event) {
    setAnimeElejido(event.target.value);
  }


  return (


    <Home className="home">
      {/* <h1>{favoritos.nombre}{favoritos.genero}</h1>
      <button onClick={() => setFavoritos({
        nombre: favorites[0].title,
        genero: "triste"
      })}></button> */}
      <Wrapper>

        <LogoImagen src="https://vignette.wikia.nocookie.net/enanimanga/images/7/76/Myanimelist_logo.png/revision/latest?cb=20191121020509"></LogoImagen>
        <SearchBar
          placeholder="¿Qué animé querés buscar?"
          value={animeElejido}
          onChange={handleInputChange}
          type="search"
        />
        <ButtonsWrapper style={{
          display: "flex"
        }}>
          <button onClick={handleSearchClick}>Buscar</button>
          <button>¡Azar!</button>
        </ButtonsWrapper>



      </Wrapper>
    </Home>
  )

}

const Home = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url('https://getwallpapers.com/wallpaper/full/f/9/2/31164.jpg');
`;

const Wrapper = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
`

const LogoImagen = styled.img`
width: 350px;
-webkit-filter: drop-shadow(1px 1px 0 black)
                  drop-shadow(-1px -1px 0 black);
  filter: drop-shadow(1px 1px 0 black) 
          drop-shadow(-1px -1px 0 black);
`
const ButtonsWrapper = styled.div`


display: flex;
width:100%;
gap: 20px;



border-radius: 6px;
button{
  cursor: pointer;
  background-color: red;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  transition: all ease-out 0.3s;

 &:hover{
   filter: brightness(0.8);
   transform: translateY(-4px)
 }
&:first-child{
  width: 70%;
}
&:last-child{
  width: 30%;
}
}
`

const SearchBar = styled.input`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;