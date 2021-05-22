import React from 'react'

const AnimeInfo = ({ nombre ,  imagen }) => (
    <div>
        <img src={imagen} />
        <div>
            <p>{nombre}</p>
        </div>      
    </div>
);


let AnimeList = [];

export const Card = ({ anime }) => {
    
    const [animeData, setAnimeData] = React.useState();

    React.useEffect(() => {
        fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}&limit=5`).then((response) =>
            response.json().then((data) => setAnimeData(data.results))
        );
       
    }, [])
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
    function consolearDatos() {
        console.log(animeData)
    }

    return (
        <>
            {animeData && (<div className="imagenBox">  
                {/* {Object.keys(animeData).map((animeInfo,index)=>(
                           <AnimeInfo
                            imagen = {animeInfo.image_url}
                            nombre = {animeInfo.title}                            
                            key = {index}
                           />
                            
                        ))} */}
                        
                        <img src={animeData[0].image_url} alt={animeData[0].title} className="imagen" />  
                        <p className="titulo">{animeData[0].title}</p>
        
            </div>
            )}
        </>  
         )
        // <img src={animeData.results[0].image_url} alt={animeData.results[0].title} />  
        //<div>{renderAnimes()}</div>
 


       
}

