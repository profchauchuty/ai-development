import axios from "axios"

class AIService {

    constructor() {
        this.system = `
            Você é um assistente especializado em análise de dados.
            Responda sempre em português do Brasil.
            Seja objetivo e preciso.
            Não invente informações.
            Para operações matemáticas, retorne apenas o resultado.
        `;
    }

    async generate(prompt) {
        const response = await axios.post(
            `http://localhost:11434/api/generate`,
            {
                model: process.env.AI_MODEL,
                system: this.system,
                prompt,
                stream: false
            }
        )

        return response.data.response
    }
}

export default new AIService()