import 'remixicon/fonts/remixicon.css';
import { gsap } from 'gsap';

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAWQZmJseQH0uPrGYTa2nUnDCsRMprOtxc");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function geminiPrompt(userPrompt) {
    console.log("generating content");
    const prompt = userPrompt;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        console.log(text);
        return text;
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());