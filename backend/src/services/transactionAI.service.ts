import OpenAI from "openai"


const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
})


export const categorizeTransaction = async(description:string) =>{
    const completion =await openai.chat.completions.create({
        model:"gpt-4.1-mini",
        messages:[
            {
                role:"system",
                content:`
                You categorize financial transactions into one word category like
                food, bills, transport, shopping, entertainment, health, education and others`

            },
            {
                role:"user",
                content:`categorize this transaction:${description}
                          `
            }
        ]
    })
    return completion.choices[0]?.message.content?.trim()
}