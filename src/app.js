import express, {json} from 'express'
import morgan from 'morgan'
import runnerRoutes from './routes/runners'
import db from './database/database';


db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error DB => ', err));

const app = express()

app.use(morgan('dev'))
app.use(json())
app.use('/api/runners',runnerRoutes)



export default app