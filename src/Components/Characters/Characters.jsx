
import React  from "react";

const Characters = ({character,mode,setName}) =>{
    const imageEndpoint= 'portrait_incredible.jpg';
    mode === 'characters' || 'creators' || 'events' ? setName('nameStartsWith'):
    mode === 'series' ? setName('titleStartsWith'):
    setName('titleStartsWith');
    
    
    return( mode === 'characters' ? <figure className='image-container'> <img  src={`${character.thumbnail.path}/${imageEndpoint}`} alt={character.name}/><br/><h1>{character.name}</h1></figure>:
            mode === 'creators' ? <figure className='image-container'> <img c src={`${character.thumbnail.path}/${imageEndpoint}`} alt={character.firstName}/><br/><h1>{character.firstName}</h1></figure>:
            <figure className='image-container'> <img  src={`${character.thumbnail.path}/${imageEndpoint}`} alt={character.title}/><br/><h1>{character.title}</h1></figure>
        
    )
}

export {Characters};


//publicKey =1c407efae20be1ec306059b1d05980e7;

//privateKey= b02a62c4857de8d5a67298c2bc841872482af952;

//ts=1;
//mds5=1b02a62c4857de8d5a67298c2bc841872482af9521c407efae20be1ec306059b1d05980e7
//hash= 04f4320c7c51688d0be29c8861c084be;

        // useEffect(() =>{
        //     const api = async () =>{
        //         try{
        //             const responsive = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
        //             if(responsive === 200){
        //                 const data = await responsive.json();
        //                 setCharacters(data);
        //             }
        //         }catch{
    
        //         }
    
        //     }
            
             
        // },[])