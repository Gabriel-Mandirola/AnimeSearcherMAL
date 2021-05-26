import styled from 'styled-components'
import { useHistory } from 'react-router'
import React from 'react'
import backgroundImg from './../../imagenes/FondoNubesAnime.jpg'
import logo from './../../imagenes/Myanimelist_logo.png'

let valueInput = ''
export const HomePage = ({ setAnime, favorites }) => {
  const [animeElejido, setAnimeElejido] = React.useState();
  function makeid(length) {
    var result = [];
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }
    return result.join('');
  }



  // const [favoritos, setFavoritos] = React.useState(() =>
  //   JSON.parse(window.localStorage.getItem("anime")));

  // React.useEffect(() => {
  //   window.localStorage.setItem("anime", JSON.stringify(favoritos))
  // }, [favoritos])

  const history = useHistory()

  function handleSearchClick() {
    if (animeElejido) {
      if (animeElejido.length >= 3) {
        setAnime(animeElejido)
        history.replace("/card")
      } else {
        alert("Ingresa al menos 3 caracteres");
      }
    }
    else {
      alert("Ingresa al menos 3 caracteres");
    }

  }
  function handleSearchAzar() {
    let azar = (makeid(3))
    setAnime(azar)
    console.log(azar);
    history.replace("/card")
  }

  function handleInputChange(event) {
    setAnimeElejido(event.target.value);
  }


  return (


    <Home style={{ backgroundImage: "url(/FondoNubesAnime.jpg)" }}>
      <Wrapper>
        <LogoImagen src={logo} alt="Logo de My anime list"></LogoImagen>
        <SearchBar
          placeholder="¿Qué animé querés buscar?"
          value={animeElejido}
          onChange={handleInputChange}
          type="search"
        />
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Buscar</button>
          <button onClick={handleSearchAzar}>¡Azar!</button>
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
  background: linear-gradient(to right,#2E51A2,#1B7AC2);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  transition: 1s  all ease-out ;

 &:hover{
   filter: brightness(0.8);
   transform: translateY(-4px);
   background: linear-gradient(to right,#1B7AC2,#2E51A2);
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