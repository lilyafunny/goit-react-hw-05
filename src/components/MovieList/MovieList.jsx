import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {

    return (
        <>

            <ul>
                {movies.map(item => (
                    <li key={item.id}>
                        <Link to={`/movies/${item.id}`}>
                            {item.title}
                        </Link>
                    </li>)
                )}
            </ul>

        </>
    );

}

export default MovieList