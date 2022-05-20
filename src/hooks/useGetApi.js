import React, { useState, useEffect} from 'react';
import axios from 'axios';



const useGetApi = (API) => {
    const [characters, setCharacters]= useState([]);
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState('')

    useEffect(() => {
        setError('');
        if(API){
            axios.get(API)
            .then(responsive => {setCharacters(responsive.data.data.results);setLoading(false)})
            .catch(error => {setError(error); setLoading(false)})

        }

    },[API]);
    return {characters,error,setLoading,loading};
};

export { useGetApi };