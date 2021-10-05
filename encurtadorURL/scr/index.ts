import express, {Request, Response} from 'express'

const api = express()


api.get('/teste', (req: Request, res: Response) => {
  res.json({ sucess: true })
})

api.listen(3000, () => {
  console.log('Porta aberta')
})
