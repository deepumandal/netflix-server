import axios from "axios";

export const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_AUTHORIZATION}`,
  },
};
const searchMovieTMDB = async (movie) => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
    TMDB_OPTIONS
  );
  return data.data?.results;
};

export default searchMovieTMDB;
