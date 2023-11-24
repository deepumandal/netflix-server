import express from "express";
import AskGpt from "../utils/GptConfig.js";

const GptRoute = express.Router();

GptRoute.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

GptRoute.post("/connections", async (req, res) => {
  try {
    const { question } = req.body;
    console.log(question);
    if (!question) {
      return res.status(400).send({
        error: "invalid question argument",
      });
    } else {
      const querry =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        question +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const chatCompletion = await AskGpt(process.env.OPENAI_API_KEY)?.chat?.completions.create({
        messages: [{ role: "user", content: querry }],
        model: "gpt-3.5-turbo",
      });
      console.log("chatCompletion",chatCompletion,process.env.APP_GPT_API_KEY)
      const gptMovies =
        chatCompletion.choices?.[0]?.message?.content.split(",");

      res.status(200).send(gptMovies);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

export default GptRoute;
