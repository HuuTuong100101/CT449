require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express())

// connect database
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected database successfully !")).catch((Error) => console.log(`Cannot connect to database \n ${Error}`))

// Start server
app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT}`))

app.get('/', (req, res) => res.send('Hello MEVN'))

