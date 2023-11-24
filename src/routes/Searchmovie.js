import express from "express";
import searchMovieTMDB from "../utils/tmdbconfig.js";

const SearchRoute = express.Router();

SearchRoute.post("/movie", async (req, res) => {
  try {
    const body = req.body;
    
    if (!Array.isArray(body) && body.length) {
      return res.status(400).send("Invalid parameters");
    } else {
      const gptMovies = body
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log("tmdbResults",tmdbResults[0])

      res.status(200).send(tmdbResults);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});
export default SearchRoute;
