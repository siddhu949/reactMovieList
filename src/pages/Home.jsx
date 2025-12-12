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
    
    
    return <div clasName="home">
        <form onsubmit={} className="search-form">
            <input type="text" placeholder="search for movies..." className="search-input"/>
        </form>
        <div className="movie-grid">
            {movies.map(movie =>(
                 <MovieCard movie ={movie} key={movie.id}/>
                 ))}
        </div>
    </div>
}
export default HomePage;