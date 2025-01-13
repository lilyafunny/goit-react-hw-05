import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../components/services/api";



const HomePage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMoviesData = async () => {

            const data = await fetchMovies();
            console.log(data);
            setMovies(data);

        };

        getMoviesData();
    }, [])


    return (
        <>
            <h1>Home</h1>
            <MovieList movies={movies} />
        </>
    )
}

export default HomePage