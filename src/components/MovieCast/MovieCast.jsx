import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMoviesDetailsById } from "../../services/api";
import s from './MovieCast.module.css'

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getCastData = async () => {
            const cast = await fetchMoviesDetailsById(movieId);
            setCast(cast);
        };
        getCastData();
    }, [movieId]);

    return (
        <div className={s.cont}>
            <ul>
                {cast.length ? cast.map(item => (
                    < li key={item.id} >{item.profile_path && <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt={item.name} />}
                        <p> {item.name}</p>
                        <p>Character: {item.character}</p>
                    </li >
                )) : <p>We don't have any informations about actors for this movie.</p>}
            </ul>
        </div>
    )
}

export default MovieCast