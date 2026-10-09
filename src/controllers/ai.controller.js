import aiService from "../services/ai.service.js"

class AIController {

    status(req, res) {
        res.json({
            message: 'AI Controller',
            model: process.env.AI_MODEL
        })
    }

    async generate(req, res) {
        const { prompt } = req.body || null

        if (!prompt) {
            return res.status(400).json({
                error: "Prompt inválido"
            })
        }

        try {
            const result = await aiService.generate(prompt)
            return res.json({ result })
        } catch (error) {
            console.error("Erro ao consultar a IA:", error)
            return res.status(502).json({
                error: "Erro ao consultar a IA"
            })
        }
    }
}

export default new AIController()