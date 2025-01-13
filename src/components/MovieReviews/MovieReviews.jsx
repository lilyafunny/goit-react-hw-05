import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMoviesRevById } from "../services/api";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [rev, setRev] = useState([]);

    useEffect(() => {
        const getRevData = async () => {
            const rev = await fetchMoviesRevById(movieId);
            setRev(rev);
        }
        getRevData();
    }, [movieId]);

    return (
        <>
            <h1>MovieReviews</h1>
            <ul>
                {rev.length ? rev.map(item => (
                    <li key={item.id}>
                        <h3>Author: {item.author}</h3>
                        <p>{item.content}</p>
                    </li>))
                    : <p>We don't have any reviews for this movie.</p>}
            </ul>

        </>)
}

export default MovieReviews