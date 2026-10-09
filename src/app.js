import express from 'express'
import cors from 'cors'
import aiRouter from './routers/ai.router.js'

const app = express()
app.use(cors())

app.use(express.json())

app.use('/ai', aiRouter)

app.listen(Number(process.env.PORT), () => {
    console.log('http://localhost/ai')
})
