//lets create our llm

import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import 'dotenv/config';
import PromptSync from 'prompt-sync'
const prompt=PromptSync()


//this is a javascript object
const model = new ChatGroq({
    model: 'llama-3.3-70b-versatile',
    temperature: 0,
    apiKey: process.env.GROQ_API_KEY
});

//send message to the LLM
async function conversation(humanInput){
    const response = await model.call([new HumanMessage(humanInput)]);
    return response.content
}

async function main(){
    while (true){
        //get user input
        const user=prompt("Ask>> ")
        if (user==="exit" || user ==="quit"){
            console.log("Good Bye")
            break;
        }

        const result=await conversation(user)
        console.log(`AI: ${result}`)
        console.log()
    }

}

main()

