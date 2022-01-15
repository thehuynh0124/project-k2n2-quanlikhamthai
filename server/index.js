const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const diseasesRouter = require('./routes/disease')
const employeeRouter = require('./routes/employee')
const hospitalRouter = require('./routes/hospital')
const dangkykhamRouter = require('./routes/dangkykham')
const vaccinRouter = require('./routes/vaccin')


const connectDB = require('./config/db.config')
dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)
app.use('/api/diseases', diseasesRouter)
app.use('/api/employees', employeeRouter)
app.use('/api/hospital', hospitalRouter)
app.use('/api/vaccin', vaccinRouter)
app.use('/api/dangkykham', dangkykhamRouter)
app.use('/api/auth', authRouter)




const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))