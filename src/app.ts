import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application router
app.use('/api/v1/user', userRouter)

// testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully')
})

export default app
