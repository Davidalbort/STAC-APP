import React, {useEffect, useState} from "react";
import {  useGetApi  } from "./useGetApi";


const useGetCharacters = () => {
  const [name, setName]=useState('nameStartsWith');
  const [API, setAPI]=useState(``);
  const [mode, setMode]=useState('');
  const [searchValue, setSearchValue]=useState('');
  const publicKey = '1c407efae20be1ec306059b1d05980e7';
  const ts = '1';
  const hash = '04f4320c7c51688d0be29c8861c084be';
  
  const API1 = `http://gateway.marvel.com/v1/public/${mode}?&offset=0&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const API2 = `http://gateway.marvel.com/v1/public/${mode}?${name}=${searchValue}&offset=0&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  
  useEffect(() => {

      if(mode){
          setAPI(API1);
          mode === 'characters' || 'creators' || 'events' ? setName('nameStartsWith'):
          mode === 'series' ? setName('titleStartsWith'):
          setName('titleStartsWith');
      }
  },[mode])
  const {characters,error,loading,setLoading}=useGetApi(API);


  return {characters,mode,setMode,searchValue,setSearchValue,loading,setLoading,error,setName};
}

export { useGetCharacters };