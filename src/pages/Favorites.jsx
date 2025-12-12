import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites(){
    const{favorites}=useMovieContext();
    if(favorites){
        return(
            <div className="favorites">
                <h2>your Favorites</h2>
        <div className="movie-grid">
           {favorites.map((movie)=>(
           < MovieCard movie={movie} key={movie.id}/>
           ))}
        </div>
        </div>
        );
    }
    return <div className ="favorites-empty">
        <h2>No favorite Movies Yet</h2>
        <p>start adding the movies then they will appear here</p>
    </div>
}
export default Favorites;