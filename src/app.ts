import express from 'express'
import morgan from 'morgan'
import router from './routes/index'
import path from 'path'

const app = express()

//SETTINGS
app.set('port', process.env.PORT || 3000)
app.use(express.json())

//MIDDLEWARES
app.use(morgan('dev'))

//ROUTES
app.use('/api', router)

//Uploads folder
app.use('/uploads', express.static(path.resolve('uploads')))

export default app;