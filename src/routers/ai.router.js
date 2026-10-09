import { Router } from 'express'
import aiController from '../controllers/ai.controller.js'

const aiRouter = Router()

aiRouter.get('/', aiController.status)
aiRouter.post('/generate', aiController.generate)

export default aiRouter