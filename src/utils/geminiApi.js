import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./constants";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const genai = new GoogleGenAI({
    apiKey: process.env.REACT_APP_GEMINI_API_KEY,
});



export default genai;