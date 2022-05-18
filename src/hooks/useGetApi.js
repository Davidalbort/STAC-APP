import React,{ useState,useEffect } from "react";


const useGetApi = (API) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading]=useState(false);
    const [error, setError] =useState('');
    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(
            (resulst) => {
                setCharacters(resulst);
                setLoading(true);
                },
            (error) =>{
                setLoading(true);
                setError(`Error: ${error.message}`);
            });
    },[])
    return {characters,loading,error};
};

export { useGetApi };