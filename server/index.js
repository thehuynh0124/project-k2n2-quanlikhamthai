const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


const UserRouter = require('./routes/userRouter')
const medicalProfileRouter = require('./routes/medicalProfileRouter')
const dangkykhamRouter = require('./routes/dangkykham')
const diseasesRouter = require('./routes/disease')
const categoryRouter = require('./routes/categoryRouter')
const vaccineRouter = require('./routes/vaccineRouter')
const hospitalRouter = require('./routes/hospital')
const roleRouter = require('./routes/roleRouter')
const doctorRouter = require('./routes/doctorRouter')
const babyRouter = require('./routes/BabyRouter')

///DB
const connectDB = require('./config/db.config')
dotenv.config()
connectDB()



////use npm tool
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

////body parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use('/api', UserRouter)
app.use('/api', medicalProfileRouter)
app.use('/api', dangkykhamRouter)
app.use('/api', diseasesRouter)
app.use('/api', categoryRouter)
app.use('/api', vaccineRouter)
app.use('/api', hospitalRouter)
app.use('/api', roleRouter)
app.use('/api', doctorRouter)
app.use('/api', babyRouter)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))