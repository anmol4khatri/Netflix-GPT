import { GoogleGenAI } from "@google/genai";
import {AI_API_KEY} from "./constants";

const ai = new GoogleGenAI({ apiKey: AI_API_KEY });

const genAi = async (userInput) => {
    const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: userInput,
    config: {
      systemInstruction: "Act as a Movie Recommendation System. Your task is to suggest **exactly 6 movie names** that are most relevant to the user query. The response **must only** contain the names of the movies, **comma-separated** without any extra text or explanation. Use the following response format: Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya",
    },
  });
  const response_text = response.text;
  const response_array = response_text.split(",").map(item => item.trim());
  
  return response_array;
};

export default genAi;