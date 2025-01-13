import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom"
import { fetchMoviesById } from "../../components/services/api";

const MovieDetailsPage = () => {

    const { movieId } = useParams();
    const [movie, setMoviesDetail] = useState(null);

    useEffect(() => {
        const getMoviesData = async () => {
            const movies = await fetchMoviesById(movieId);
            setMoviesDetail(movies);
        };


        getMoviesData();
    }, [movieId])

    if (!movie) {
        return <h2>Loading...</h2>;
    }
    console.log(movie);


    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
            <h1>{movie.original_title}</h1>
            <p>User Score: {movie.vote_count}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>


            <nav>
                <ul>
                    <li>
                        <NavLink to='cast'>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to='reviews'>Reviews</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default MovieDetailsPage