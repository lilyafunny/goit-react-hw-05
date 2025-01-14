import axios from "axios";


const API_KEY = 'ed815ba254aa1bde03b7bca0fff9da20';
const BASE_URL = 'https://api.themoviedb.org/3/'

//const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDgxNWJhMjU0YWExYmRlMDNiN2JjYTBmZmY5ZGEyMCIsIm5iZiI6MTczNjc3NDE0OC41MjcsInN1YiI6IjY3ODUxMjA0YjkwOTRjN2RmZWJiM2Q1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uHl9N-tMvVXt_x5rLf2zOYGw107fMF8pxfTYBNfUrfQ'
    },
};




export const fetchMovies = async () => {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, options);
    return data.results;
};

export const fetchMoviesById = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}`, options);
    return data;
};

export const fetchMoviesDetailsById = async (movieId) => {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
    return data.cast;
}

export const fetchMoviesRevById = async (movieId) => {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
    console.log(data);

    return data.results;
}

export const fetchMoviesData = async (query) => {
    const { data } = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
    console.log(data);
    return data.results;
}


