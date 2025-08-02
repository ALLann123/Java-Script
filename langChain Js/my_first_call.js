//lets create our llm

import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import 'dotenv/config';

//this is a javascript object
const model = new ChatGroq({
    model: 'llama-3.3-70b-versatile',
    temperature: 0,
    apiKey: process.env.GROQ_API_KEY
});

//send message to the LLM

(async() => {
    const response = await model.call([
        new HumanMessage("Hello, how are you?")
    ]);
    console.log(response.content);
})();