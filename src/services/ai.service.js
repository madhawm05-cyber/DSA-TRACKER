const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_KEY
});

const geminiSchema = {
    type: "object",
    properties: {
        question: {
            type: "object",
            properties: {
                questionNo: {
                    type: "number",
                    description: "LeetCode question number"
                },
                questionStatement: {
                    type: "string",
                    description: "Question statement"
                },
                difficulty: {
                    type: "string",
                    description: "Easy, Medium or Hard"
                },
                topic: {
                    type: "string",
                    description: "Topic like Binary Search, Arrays etc"
                }
            }
        },
        logic: {
            type: "string",
            description: "Logic used in solving"
        },
        edgeCases: {
            type: "string",
            description: "Edge cases"
        },
        optimisation: {
            type: "string",
            description: "Optimisation tips"
        },
        timeComplexity: {
            type: "string",
            description: "Time complexity"
        },
        spaceComplexity: {
            type: "string",
            description: "Space complexity"
        },
        mistakes: {
            type: "string",
            description: "Common mistakes"
        },
        concept: {
            type: "string",
            description: "Main concept"
        }
    }
};

async function analyzeCode(code, questionNo) {
    const prompt = `
You are a DSA expert teacher who explains in simple Hindi/English mix.
Analyze this LeetCode solution and generate structured notes.

Question Number: ${questionNo}
Code: ${code}

Generate detailed notes with logic, edge cases, mistakes, complexity.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: geminiSchema
        }
    });

    const parsed = JSON.parse(response.text);
    console.log(parsed);
    
    return parsed;

}

module.exports = { analyzeCode };