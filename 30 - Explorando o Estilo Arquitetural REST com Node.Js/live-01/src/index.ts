import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/users.route'


const app = express()


//Configurações da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configurações de rotas
app.use(usersRoute)

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso' })
})


//Iniciliazação do servidor
app.listen(3000, () => {
    console.log('Aplicacao executando na porta 3000')
})

