import MovieCard from "../components/MovieCard"
function Home(){
    const movies=[
        {
            id:1,title:"jhon-wick",release_date:"2020"
        },
          {
            id:2,title:"jhon-wick1",release_date:"2021"
        },
          {
            id:3,title:"jhon-wick2",release_date:"2022"
        },

    ]
    
    const handleSearch=() =>{

    }
    return <div clasName="home">
        <form onsubmit={handleSearch} className="search-form">
            <input type="text"
             placeholder="search for movies..." 
            className="search-input"
            />
            <button type='submit'className="search-button">Search</button>
        </form>
        <div className="movie-grid">
            {movies.map(movie =>(
                 <MovieCard movie ={movie} key={movie.id}/>
                 ))}
        </div>
    </div>
}
export default HomePage;