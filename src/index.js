import express from "express";
import GptRoute from "./routes/gptSearch.js";

const app = express();
import "dotenv/config";
import SearchRoute from "./routes/Searchmovie.js";


app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1> hii i am netflix server and i am listening </h1>");
});

app.use("/openai", GptRoute);
app.use("/search", SearchRoute)
app.listen(7000, () => {
  console.log("listening on http://localhost:7000");
});
