import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const chatWithTechAssistant = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      history: history,
      config: {
        systemInstruction: `You are a friendly and knowledgeable tech expert assistant for "6ix Gadgets", a platform for buying, selling, and swapping electronics in Ibadan, Nigeria.
        
        Your role is to:
        1. Assist users with questions about device values, swapping processes, and tech specs.
        2. Be polite, concise, and helpful.
        3. If asked about prices, give estimated ranges and remind them to use the "Swap Portal" for an exact quote.
        4. Promote the "Instant Swap" and "1-Year Warranty" features of 6ix Gadgets.
        
        Keep responses under 100 words unless detailed technical advice is needed.`,
      },
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm having a little trouble connecting to the server right now. Please try again later.";
  }
};
