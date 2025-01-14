import { useEffect, useState } from "react"
import SearchBar from "../../components/SearchBar/SearchBar"
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesData } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {

    const [movies, setMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();


    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) return;

        const getMoviesData = async () => {

            try {
                const data = await fetchMoviesData(query);
                setMovie(data);

            } catch (error) {
                console.log(error);
            }
        };
        getMoviesData();
    }, [query])

    const handleChangeQuery = (newQuery) => {
        searchParams.set('query', newQuery);
        setSearchParams(searchParams);
    }



    return (
        <>
            <SearchBar handleChangeQuery={handleChangeQuery} />
            <MovieList movies={movies} />
        </>
    )
}

export default MoviesPage