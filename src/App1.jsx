import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      <div>
        <p>hello world from the app</p>
      </div>
      <Text display="whats up"/>
      <Text display="whats up hello"></Text>

    </>
  );
}
function Text({text}) {
  return <div>
    <p>hello world from the Text {display}</p>
  </div>
}
export default App
function App() {
 const movieNumber=1;


  return (
    <>
    //conditional rendering
      {
      movieNumber ===1 ? (<MovieCard movie={{title:"Tim's film",release_date:"2024"}}/>)
      :(
      <MovieCard movie={{title:"Tim's film",release_date:"2024"}}/>)}

    {movieNumber === 1 && <MovieCard movie={{title:"Tim's film",release_date:"2024"}}/>}

    </>
  );
}
    <div className="movie-grid">
            {movies.map(movie =>(
                movies.title.toLowerCase().startsWith(searchQuery) &&
                ( <MovieCard movie ={movie} key={movie.id}/>
                 )))}
        </div>