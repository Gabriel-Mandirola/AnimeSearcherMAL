import styled from 'styled-components'
import {useHistory} from 'react-router'
import logo from '../../Logo-starcraft2.png'
import React from 'react'


export const HomePage = ({setAnime}) => {
const history = useHistory ()

function handleSearchClick() {
    setAnime("air")
    history.replace("/card")
}

    return (

         
    <Home>
    <Wrapper>  
      <LogoImagen src={logo}></LogoImagen>    
    <input style={{marginBottom: "20px"}}type="search"/>
    <ButtonsWrapper style={{
      display: "flex"
    }}>
    <button onClick ={handleSearchClick}>Buscar</button>      
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
background-image: url('https://wallpaperaccess.com/full/1656032.jpg');
`;

const Wrapper = styled.div`
width: 50%;
display: flex;
flex-direction: column;
`

const LogoImagen = styled.img`
width: 350px;
`
const ButtonsWrapper = styled.div`


display: flex;
width:100%;
gap: 20px;



border-radius: 6px;
button{
  cursos: pointer;
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