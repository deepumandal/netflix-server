import OpenAI from "openai";

const AskGpt = (key) => {
  return new OpenAI({
    apiKey: key,
  });
};

export default AskGpt;
