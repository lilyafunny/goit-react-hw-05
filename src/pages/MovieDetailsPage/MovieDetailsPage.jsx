import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMoviesById } from "../../services/api";
import s from './MovieDetailsPage.module.css'
import clsx from "clsx";


const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
}

const MovieDetailsPage = () => {

    const { movieId } = useParams();
    const [movie, setMoviesDetail] = useState(null);
    const location = useLocation();
    const goBackRef = useRef(location.state ?? '/movies');


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
        <div className={s.contanier}>

            <Link to={goBackRef.current}>Go back</Link>
            <div className={s.wrap}>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
                <div className={s.text}>
                    <h1>{movie.original_title}</h1>
                    <p>User Score: {movie.vote_count}</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                </div>
            </div>

            <nav >
                <ul className={s.ul}>
                    <li>
                        <NavLink className={buildLinkClass} to='cast'>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink className={buildLinkClass} to='reviews'>Reviews</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default MovieDetailsPage