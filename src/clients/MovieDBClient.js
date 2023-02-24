import config from "../config";
import { fetchData } from "../helpers/RequestHelper";

const requestInfo = {
  url: "",
  api_token: config.MOVIEDB_API_KEY,
  headers: {
    Authorization: "Bearer " + config.MOVIEDB_BEARER_TOKEN,
  },
};
export async function fetchTrendingMovies() {
  return await fetchData({
    ...requestInfo,
    url: config.MOVIEDB_BASE_URL + "/3/trending/movie/week",
  });
}

export async function fetchMovieDetail(movieId) {
  return await fetchData({
    ...requestInfo,
    url: config.MOVIEDB_BASE_URL + `/3/movie/${movieId}`,
  });
}

export async function fetchGenreList() {
  return await fetchData({
    ...requestInfo,
    url: config.MOVIEDB_BASE_URL + "/3/genre/movie/list",
  });
}

export async function fetchMoviesByGenreId(genreId) {
  return await fetchData({
    ...requestInfo,
    url: config.MOVIEDB_BASE_URL + "/3/discover/movie?with_genres=" + genreId,
  });
}
