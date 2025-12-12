import { createContext,useState,useContext,useEffect } from "react";

const MovieContext=createContext()
export const useMovieContext=()=>useContext()
export const MovieProvider=({childhren})=>{
    const [favorites,setFavorites]=useState([])
    useEffect(()=>{
        const storedFavs=localStorage.getItem("favorite")
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])
    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addToFavorites=(movie)=>{
        setFavorites(prev=>[...prev,movie])
    }
    const removeFromFavorites=(movieId)=>{
        setFavorites(prev=>prev.filter(movie=>movie.id!==movie.Id))
    }
    const isFavorite=(movieId)=>{
        return favorites.some(movie=>movie.id===movie.Id)
    }
    const value={
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite


    }
    return <MovieContext.Provider value={value}>
        {childhren}
    </MovieContext.Provider>
}