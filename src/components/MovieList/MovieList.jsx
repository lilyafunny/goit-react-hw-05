import { Link, useLocation } from "react-router-dom";
import s from './MovieList.module.css'

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <>
            <ul className={s.ul}>
                {movies.map(item => (
                    <li key={item.id}>
                        <Link to={`/movies/${item.id}`} state={location}>
                            {item.title}
                        </Link>
                    </li>)
                )}
            </ul>

        </>
    );

}

export default MovieList