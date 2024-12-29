import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const useGetGemini = (prompt: string | null) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (prompt) {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        setLoading(true);
        try {
          const response = await model.generateContent(prompt);
          setResult(response.response.text());
          setLoading(false);
        } catch (e) {
          console.log(e);
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [prompt, apiKey]);

  return { result, loading };
};
