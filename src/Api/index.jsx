import axios from 'axios';
const api_key = "d97a26a85d3a3eae1dfd559c2643dd83";
const baseUrl = "https://api.themoviedb.org/3/"

async function fetchPopularMovies(page=1) {
    const response = await axios.get(`${baseUrl}movie/popular`, {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: page
        }
    });
    return response.data;
}

 async function fetchMoviesDetails(movieId) {
    const response = await axios.get(`${baseUrl}movie/${movieId}`, {
        params: {
            api_key: api_key,
            language: 'en-US'
        }
    });
    return response.data;
}

 async function fetchMoviesTrailer(movieId) {
    const response = await axios.get(`${baseUrl}movie/${movieId}/videos`, {
        params: {
            api_key: api_key,
            language: 'en-US'
        }
    });
    return response.data;
}

 async function fetchMoviesCast(movieId) {
    const response = await axios.get(`${baseUrl}movie/${movieId}/credits`, {
        params: {
            api_key: api_key,
            language: 'en-US'
        }
    });
    return response.data;
}

async function fetchCastDetails(personId) {
    const response = await axios.get(`${baseUrl}person/${personId}`, {
        params: {
            api_key: api_key,
            language: 'en-US'
        }
    });
    return response.data;
}

async function fetchActorMovies(personId) {
    const response = await axios.get(`${baseUrl}person/${personId}/movie_credits`, {
        params: {
            api_key: api_key,
            language: 'en-US'
        }
    });
    return response.data;
}

async function searchMovies(query, page=1) {
    const response = await axios.get(`${baseUrl}search/movie`, {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: page,
            query: query
        }
    });
    return response.data;
}

async function fetchTrendingMovies(page=1) {
    const response = await axios.get(`${baseUrl}trending/movie/week`, {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: page
        }
    });
    return response.data;
}

async function fetchTopRatedMovies(page=1) {
    const response = await axios.get(`${baseUrl}movie/top_rated`, {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: page
        }
    });
    return response.data;
}

async function fetchUpcomingMovies(page=1) {
    const response = await axios.get(`${baseUrl}movie/upcoming`, {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: page
        }
    });
    return response.data;
}

async function fetchNowPlayingMovies(page=1) {
    const response = await axios.get(`${baseUrl}movie/now_playing`, {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: page
        }
    });
    return response.data;
}

async function fetchMoviesByGenre(genreId, page=1) {
    const response = await axios.get(`${baseUrl}discover/movie`, {
        params: {
            api_key: api_key,
            language: 'en-US',
            page: page,
            with_genres: genreId
        }
    });
    return response.data;
}

export { fetchPopularMovies,
     searchMovies,
    fetchMoviesDetails, fetchMoviesTrailer, fetchMoviesCast, fetchCastDetails, fetchActorMovies, fetchTrendingMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchNowPlayingMovies, fetchMoviesByGenre };